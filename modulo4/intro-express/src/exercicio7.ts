import express from "express"
import cors from "cors"
import { Postman } from "./exercicio6"
import { Request, Response } from "express"

const app = express()
app.use(express.json())
app.use(cors())

app.get('/Postman', (req: Request, res: Response) => {
    try{
        const listaPosts = Postman

        const postagem = listaPosts.map((post) => {
            return post.title
        })

        res.status(200).send(postagem)
    }
    catch(error){
        res.status(400).end("Post is not found!")
    }
})

app.listen(3003, () => {
    console.log("Server is ON")
    console.log({Postman})
})