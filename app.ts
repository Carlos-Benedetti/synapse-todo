import express from "express"
import { authenticateToken, createToken, Cretential } from "./auth"

const app = express()
app.use(express.json())

// Ping
app.post("/ping", (pergunta, resposta) => {
    resposta
        .status(200)
        .send("ping")
})

const users = [
    { id: 1, username: 'admin', password: '123' },
    { id: 2, username: 'user', password: '123' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(400).send('Username or password is incorrect');
    }

    const credential:Cretential = {
        id: user.id,
        username: user.username
    }
    const token = createToken(credential)
    res.json({ token });
});

app.post('/protected', authenticateToken, (req, res) => {
    res.send('Essa é uma rota protegida')
})


app.listen(8080, () => {
    console.log("Ouvindo na porta 8080")
})
