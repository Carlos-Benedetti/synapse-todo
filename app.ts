import express from "express"
import sequelize from "./db";
import { DataTypes, Model, Sequelize } from "sequelize";


// DATABASE START

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

//Definindo oque é um usuario 
class User extends Model { }
User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, { sequelize, modelName: 'user' });
// salvando a defini de usuario no Banco
sequelize.sync();


const app = express()
app.use(express.json())

// CRUD routes for User model
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});
app.post("/", (pergunta, resposta) => {
    resposta
        .status(200)
        .send("ola mundo")
})


app.listen(8080, () => {
    console.log("Ouvindo na porta 8080")
})
