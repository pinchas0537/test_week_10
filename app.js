import express from "express";
import { config } from 'dotenv'
import userRouter from "./routers/usersR.js"
import messageRouter from "./routers/messageR.js"
config();

const app = express();
const port = process.env.PORT;;

app.use(express.json());

app.use("/api/auth",userRouter)

app.use("/api/messages",messageRouter)

app.use("/api/users",userRouter)

app.get("/", (req, res) => {
    res.send("Wolcome to server!")
});

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`)
});