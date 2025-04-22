from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from dependencies.base import Base
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship




class Tag(Base):
    __tablename__ = 'tags'
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    user = relationship("User")
    content_items = relationship("ContentItemTag", back_populates="tag")