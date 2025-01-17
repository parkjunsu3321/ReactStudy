from sqlalchemy.ext.asyncio import AsyncSession
from .schema import UserDTO
from core.models import UserModel

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