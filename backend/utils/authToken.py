import jwt
from datetime import datetime, timedelta, timezone
from typing import Optional
from core.config import settings
from fastapi import Response




def create_access_token(
    data: dict,
    expires_delta: Optional[timedelta] = None
) -> str:
    
    to_encode = data.copy()
    
    # Set expiration time
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    
    to_encode.update({"exp": expire})
    
    try:
        encoded_jwt = jwt.encode(
            payload=to_encode,
            key=settings.SECRET_KEY,
            algorithm=settings.ALGORITHM
        )
        return encoded_jwt
    except Exception as e:
        # Handle potential encoding errors
        raise ValueError(f"Error encoding JWT: {str(e)}")
    
    
def set_auth_cookie(response: Response, token : str):
    response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        secure=True if not settings.DEBUG else False,
        samesite="lax",
        max_age=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        path="/",
    )
    