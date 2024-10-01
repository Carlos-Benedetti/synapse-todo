import express from "express"

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.sendStatus(218)
})

app.post("/",(pergunta,resposta)=>{
    resposta
        .status(200)
        .send("ola mundo")
})


app.listen(8080,()=>{
    console.log("Ouvindo na porta 8080")
})
