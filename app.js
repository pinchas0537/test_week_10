import express from "express";
import { config } from 'dotenv'
config();

const app = express();
const port = process.env.PORT;;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Wolcome to server!")
});

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`)
});