from fastapi import FastAPI
from app.api import routes
from app.api import auth

app = FastAPI()

app.include_router(routes.router, prefix="/api")
app.include_router(auth.authRouter, prefix="/api/auth")