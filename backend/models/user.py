from sqlalchemy import Column, Integer, String, DateTime
from dependencies.base import Base
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship



class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    content_items = relationship("ContentItem", back_populates="user")
    services = relationship("Service", back_populates="user")
   
