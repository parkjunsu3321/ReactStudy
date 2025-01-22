from sqlalchemy import Column, DateTime, String, Integer, Boolean
from core.database import Base

class UserModel(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    nick_name = Column(String, unique=True)
    user_email = Column(String, unique=True)
    password = Column(String)
    birthdate = Column(DateTime)
    authenticator = Column(Boolean, default=False)