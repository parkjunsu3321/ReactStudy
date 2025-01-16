from sqlalchemy.ext.asyncio import AsyncSession
from schema import UserDTO
from core.models import UserModel

class UserCRUD:
    def __init__(self, session: AsyncSession):
        self._session = session

    async def user_add(payload:UserDTO):

        return 0