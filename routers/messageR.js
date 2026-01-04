import express from "express";
import { validId, validMessage } from "../middleware/messageM.js";
import { userAuthenticationM } from "../middleware/messageM.js";
import { creatOneMessage, getOneMessage } from "../cnrl/massegeC.js";

const router = express.Router()

router.post("/encrypt",validMessage,userAuthenticationM,creatOneMessage)

router.post("/decrypt",userAuthenticationM,validId,getOneMessage)

export default router