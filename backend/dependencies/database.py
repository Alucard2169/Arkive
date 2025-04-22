from sqlalchemy import create_engine
from dependencies.base import Base 
from sqlalchemy.orm import sessionmaker
from core.config import settings
from models import * 

DATABASE_URL = settings.DATABASE_URL


engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()