from sqlalchemy import Column, Integer, String, DateTime, Boolean, JSON, ForeignKey
from dependencies.base import Base
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship



class Service(Base):
    __tablename__ = 'services'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    service_type = Column(String, nullable=False)
    encrypted_access_token = Column(String, nullable=False)
    encrypted_refresh_token = Column(String, nullable=False)
    token_expires_at = Column(DateTime(timezone=True))
    is_active = Column(Boolean, default=False)
    last_synced_at = Column(DateTime(timezone=True))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    config = Column(JSON, nullable=True)

    # Relationships
    user = relationship("User", back_populates="services")
    content_items = relationship("ContentItem", back_populates="service_connection")