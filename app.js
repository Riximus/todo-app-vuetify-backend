import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()

const PORT = process.env.NODE_PORT || 3000

const apiTodos = '/todos'
const apiId = '/:id'

app.post(apiTodos, (req, res) => {
    res.status(201).send('Hello POST')

})

app.patch(apiTodos + apiId, (req, res) => {
    res.status(200).send('Hello PATCH')
})

app.delete(apiTodos + apiId, (req, res) => {
    res.status(200).send('Hello DELETE')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
