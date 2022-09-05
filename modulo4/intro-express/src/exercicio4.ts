import express from "express"
import cors from "cors"
import { Users } from "./exercicio3"
import { Request, Response } from "express"


const app = express()
app.use(express.json())
app.use(cors())

app.get('/users', (req: Request, res: Response) => {
    try{
        const listaUsuarios = Users

        const user = listaUsuarios.map((usuario) => {
            return usuario.name
        })

        res.status(200).send(user)
    }
    catch(error){
        res.status(400).end("User is not found!")
    }
})

app.listen(3003, () => {
    console.log("Server is ON")
    console.log({Users})
})