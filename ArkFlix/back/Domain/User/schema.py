from pydantic import BaseModel
from typing import Optional
from datetime import date

class UserDTO(BaseModel):
    user_email: str
    nick_name: str
    password: str
    birthdate: date

class LoginDTO(BaseModel):
    email:str
    password:str