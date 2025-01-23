from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from .schema import (UserDTO,LoginDTO)
from core.models import UserModel
from core.dependencies import create_access_token, verify_password

class UserCRUD:
    def __init__(self, session: AsyncSession):
        self._session = session

    async def create_user(self,*,payload:UserDTO):
        new_user = UserModel(nick_name=payload.nick_name, 
                             user_email=payload.user_email,
                             password=payload.password,
                             birthdate=payload.birthdate)
        self._session.add(new_user)
        await self._session.commit()
        return new_user
    
    async def Login(self,*,email,password):
        result = await self._session.execute(select(UserModel).where(UserModel.user_email == email))
        user = result.scalars().first()
        print(user.authenticator)
        print(verify_password(password, user.password))
        if verify_password(password, user.password) and user.authenticator:
            return create_access_token(data={"user_id": user.id})
        else:
            return 0
        
    async def get_user_by_email(self,*,email:str):
        result = await self._session.execute(select(UserModel).where(UserModel.user_email == email))
        user = result.scalars().first()
        return user
    
    async def get_user_by_nick(self,*,nickname:str):
        result = await self._session.execute(select(UserModel).where(UserModel.nick_name == nickname))
        user = result.scalars().first()
        return user

    async def user_auth_change(self,*,email:str):
        result = await self._session.execute(select(UserModel).where(UserModel.user_email == email))
        user = result.scalars().first()
        user.authenticator = True
        await self._session.commit()
        return user