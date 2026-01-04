import express from "express";
import { userAuthentication, validUser } from "../middleware/usersM.js";
import { creatOneUser, getMyProfile } from "../cnrl/usersC.js";
import { userAuthenticationM } from "../middleware/messageM.js";

const router = express.Router()

router.post("/register",validUser,userAuthentication,creatOneUser)

router.get("/me",validUser,userAuthenticationM,getMyProfile)

export default router