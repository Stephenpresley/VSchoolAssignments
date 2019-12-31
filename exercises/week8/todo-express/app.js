const express = require('express')
const app = express()
const uuid = require('uuid')
const PORT = 8000
const todos = [
    {
        "name": "Whiskey",
        "description": "get some whiskey",
        "completed": false,
        "_id": "ec3faf17-c88c-4e2d-ad5e-be646dd6b63b"
    },
    {
        "name": "Gin",
        "description": "On second thought, do not get gin. Get anything but gin!",
        "completed": false,
        "_id": "556f8db6-d8c8-4dec-8905-99e5ba9176e7"
    },
    {
        "name": "milk",
        "description": "get some milk",
        "completed": false,
        "_id": "3cf511fb-d6d9-4af5-98e0-9a93842553e2"
    }
]

app.use(express.json())

app.get('/todos', (req, res) => {
    res.send(todos)
})

app.get('/todos/:_id', (req, res) => {
    const {_id} = req.params
    const singletTodo = todos.find(todo => todo._id === _id)
    res.send(singletTodo)
})

app.post('/todos', (req, res) => {
    todos.push({...req.body, _id: uuid()})
    res.send(todos)
})

app.delete('/todos/:_id', (req, res) => {
    const {_id} = req.params
    const index = todos.findIndex(todo => todo._id === _id)
    todos.splice(index, 1)
    res.send(todos)
})

app.put('/todos/:_id', (req, res) => {
    const {_id} = req.params
    let updatedTodo = req.body
    todos.forEach(todo => {
        if(todo._id === _id){
            updatedTodo = Object.assign(todo, updatedTodo)
        }
    })
    res.send(updatedTodo)
})

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})