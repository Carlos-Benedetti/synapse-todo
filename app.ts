import express from "express"
import { loggerMiddle } from "./middleware/logger"

// cria a API 
const app = express()
app.use(express.json())

// ping
app.get("/ping",loggerMiddle, (pergunta, resposta) => {
    resposta
        .status(200)
        .send("pong")
})



app.listen(8080, () => {
    console.log("Ouvindo na porta 8080")
})
