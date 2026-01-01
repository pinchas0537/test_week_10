import express from "express";
import { validId, validMessage } from "../middleware/messageM.js";
import { userAuthentication } from "../middleware/messageM.js";
import { creatOneMessage, getOneMessage } from "../cnrl/massegeC.js";

const router = express.Router()

router.post("/encrypt",validMessage,userAuthentication,creatOneMessage)

router.post("/decrypt",userAuthentication,validId,getOneMessage)

export default router