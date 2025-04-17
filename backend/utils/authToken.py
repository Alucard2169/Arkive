import jwt
from datetime import datetime, timedelta, timezone
from typing import Optional
from core.config import settings


print(settings.SECRET_KEY)

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