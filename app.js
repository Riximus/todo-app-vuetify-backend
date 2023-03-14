import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as todosDb from './database/todosDb.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.NODE_PORT || 3000

const apiTodos = '/todos'
const apiId = '/:id'

app.post(apiTodos, (req, res) => {
    const id = req.body.id
    const task = req.body.task
    const date = req.body.date
    const isDone = req.body.isDone

    todosDb.InsertTodo(id, task, date, isDone)
        .then(() => res.status(201).send({message: 'Todo created'}))
        .catch((error) => {
            res.status(500)
            console.log(`!! API - ${error}`)
        })
})

app.patch(apiTodos + apiId, (req, res) => {
    const id = req.params.id
    const isDone = req.body.isDone

    todosDb.UpdateTodoDone(id, isDone)
        .then(()=> res.status(204))
        .catch(() => res.status(304))
})

app.delete(apiTodos + apiId, (req, res) => {
    const id = req.params.id

    todosDb.DeleteTodo(id)
        .then(()=> res.status(204))
        .catch(()=> res.status(304))
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
