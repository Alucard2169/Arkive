from sqlalchemy import Column, ForeignKey, Integer, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from dependencies.base import Base

class ContentItemTag(Base):
    __tablename__ = 'content_item_tags'
    
    content_item_id = Column(Integer, ForeignKey('content_items.id', ondelete='CASCADE'), primary_key=True)
    tag_id = Column(Integer, ForeignKey('tags.id', ondelete='CASCADE'), primary_key=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    content_item = relationship("ContentItem", back_populates="tags")
    tag = relationship("Tag", back_populates="content_items")