from fastapi import APIRouter, Depends, HTTPException, status, Response, Request
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from sqlalchemy.orm import Session
from dependencies.database import get_db
from models.user import User
from utils.passwordHash import get_password_hash, verify_password
from utils.authToken import create_access_token, set_auth_cookie
from datetime import timedelta
import jwt
from jwt import ExpiredSignatureError, InvalidTokenError
from core.config import settings


ACCESS_TOKEN_EXPIRE_MINUTES = settings.ACCESS_TOKEN_EXPIRE_MINUTES

authRouter = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class UserAuth(BaseModel):
    username: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str

class LoginResponse(BaseModel):
    message: str
    user: dict
    
 

@authRouter.get("/verify")
def verify_access_token(request: Request):
    auth_header = request.headers.get("Authorization")
    
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="No token found in Authorization header",
            headers={"WWW-Authenticate": "Bearer"},
        )
        
    token = auth_header.split(" ")[1]
    
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        return {"authenticated": True, "username": payload.get("sub")}
    
    except ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token expired",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    except InvalidTokenError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal Server Error"
        )


            

@authRouter.post("/register")
async def register_user(response: Response, user: UserAuth, db: Session = Depends(get_db)):
    if db.query(User).filter(User.username == user.username).first():
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail={"message": "Username already exists"},
            headers={"WWW-Authenticate": "Bearer"},
            )
    
    hashed_password = get_password_hash(user.password)
    db_user = User(username=user.username, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    set_auth_cookie(response, access_token)
    
    return {"message": "User created successfully", "user": {"username": db_user.username, "id": db_user.id}}


@authRouter.post("/login")
async def login_user(response: Response, user: UserAuth, db: Session = Depends(get_db)):
    invalid_credentials_message = {"message": "Invalid credentials"}
    db_user = db.query(User).filter(User.username == user.username).first()
    if not db_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=invalid_credentials_message,
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    if not verify_password(user.password, db_user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=invalid_credentials_message,
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": db_user.username}, expires_delta=access_token_expires
    )

    set_auth_cookie(response, access_token)
    
    return {"message": "Login successful", "user": {"username": db_user.username, "id": db_user.id} }


@authRouter.post("/password_reset")
async def password_reset(response: Response, user: UserAuth, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.username == user.username).first()
    if not db_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail={"message": "Invalid credentials"},
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    hashed_password = get_password_hash(user.password)
    db_user.password = hashed_password
    db.commit()
    db.refresh(db_user)
    
    return {"message": "Password updated successfully"}




@authRouter.post("/logout")
async def logout_user(response: Response):
    response.delete_cookie(
        key="access_token",
        path="/",
        secure=True if not settings.DEBUG else False,
        httponly=True,
    )
    return {"message": "Logout successful"}
