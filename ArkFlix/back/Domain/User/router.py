from fastapi import APIRouter, Depends
from core.database import provide_session
from .schema import (UserDTO)
from core.dependencies import hash_password
from .crud import UserCRUD

router = APIRouter()

@router.post("/join")
async def join(payload:UserDTO,db=Depends(provide_session)):
    crud = UserCRUD(db)
    payload.password = hash_password(payload.password)
    user = await crud.create_user(payload=payload)
    return user

