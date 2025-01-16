from pydantic import BaseModel
from typing import Optional
from datetime import date

class UserDTO(BaseModel):
    id: int
    user_email: str
    nick_name: str
    password: str
    birthdate: date
