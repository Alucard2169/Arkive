from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, JSON
from dependencies.base import Base
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship



class ContentItem(Base):
    __tablename__ = 'content_items'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    service_connection_id = Column(Integer, ForeignKey('services.id'), nullable=False)
    external_id = Column(String, nullable=False)
    content_type = Column(String, nullable=False)
    title = Column(String, nullable=False)
    description = Column(String)
    url = Column(String)
    thumbnail_url = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    content_metadata = Column(JSON, nullable=True)
    
    # Relationships
    user = relationship("User", back_populates="content_items")
    service_connection = relationship("Service", back_populates="content_items")
    tags = relationship("ContentItemTag", back_populates="content_item", cascade="all, delete-orphan")