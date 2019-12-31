const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())

mongoose.connect('mongodb://localhost:27017')

const PORT = 8000

const todos = []

app.get('/todo', (req, res) =>{
    console.log(req.query)
    res.send(todos)
})

app.post('/todo', (req, res) =>{
    todos.push(req.body)
    res.send(todos)
})

app.listen(PORT, () => {
    console.log('app is running of port ' + PORT)
})

// const express = require('express')
// const app = express()

// const PORT = 8001

// app.get('/', (req, res) => {
//     console.log('end point hit')
//     res.send('Goodbye World!')
// })

// app.listen(PORT, () => {
//     console.log('app is running of port ' + PORT)
// })