from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    DATABASE_URL: str
    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int
    FRONTEND_URL: str
    DEBUG: bool = True
    
    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()


