from fastapi import FastAPI
from dependencies.database import engine
from dependencies.base import Base
from routers.auth import authRouter
from fastapi.middleware.cors import CORSMiddleware
from core.config import settings
from models import * 




Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(authRouter, prefix="/api/auth", tags=["auth"])

@app.get("/")
async def root():
    return {"message": "Hello "}


