from fastapi import APIRouter, Depends
from core.database import provide_session
from .schema import (UserDTO,LoginDTO)
from core.dependencies import hash_password
from .crud import UserCRUD
from core.dependencies import TOKEN_TYPE
from core.dependencies import (send_verification_email, verify_email,get_email_by_token)

router = APIRouter()

@router.post("/join")
async def Join(payload:UserDTO,db=Depends(provide_session)):
    crud = UserCRUD(session=db)
    payload.password = hash_password(payload.password)
    user = await crud.create_user(payload=payload)
    send_verification_email(user.user_email)
    return user

@router.get("/login")
async def Login(email:str,password:str,db=Depends(provide_session)):
    crud = UserCRUD(session=db)
    token = await crud.Login(email=email, password=password)
    if token:
        return {"access_token": TOKEN_TYPE+" "+token}
    else:
        return {"error": "Invalid credentials or authentication failed"}

@router.get("/emailCheck")
async def EmailCheck(email:str,db=Depends(provide_session)):
    crud = UserCRUD(session=db)
    if await crud.get_user_by_email(email=email):
        return True
    else:
        return False

@router.get("/auth")
async def AuthCheck(token:str,db=Depends(provide_session)):
    crud = UserCRUD(session=db)
    if verify_email(token=token):
        email = get_email_by_token(token=token)
        if crud.user_auth_change(email=email):
            return True
        else:
            return False
    else:
        return False

@router.get("/nickCheck")
async def NickCheck(nick:str,db=Depends(provide_session)):
    crud = UserCRUD(session=db)
    if await crud.get_user_by_nick(nickname=nick):
        return True
    else:
        return False