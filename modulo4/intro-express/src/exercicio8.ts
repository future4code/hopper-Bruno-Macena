import express from "express"
import cors from "cors"
import { Postman } from "./exercicio6"
import { Request, Response } from "express"


const app = express()
app.use(express.json())
app.use(cors())

app.get('/postsUser', (req: Request, res: Response) => {
    try{
        const userId = Number(req.query.id)

        let userPost: {}[] = []
        for(let element of Postman) {
            if (element.id === userId) {
                userPost.push(userId)
            }
        }
        res.status(200).send(userPost)
    }

    catch(error){
        res.status(400).end("Post is Not Found!")
    }
})

app.listen(3003, () => {
    console.log("Server is ON")
    console.log({Postman})
})