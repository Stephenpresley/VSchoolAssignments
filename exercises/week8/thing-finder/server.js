const express = require('express')
// const uuid = require('uuid')
const app = express()
const PORT = 5000
const inventory = require('./inventory.json')

app.use(express.json())

app.get('/things', (req, res) => {
    const {type, price} = req.query
    if(type && price) {
        const things = inventory.filter(thing => thing.type === type)
        res.send(things.filter(thing => thing.price <= +price))
    } else if(type) {
        res.send(inventory.filter(thing => thing.type === type))
    } else if(price) {
        res.send(inventory.filter(thing => thing.price <= +price))
    } else {
        res.send(inventory)
    }
})

app.get('/things/:_id', (req, res) => {
    const {_id} = req.params
    const oneThing = inventory.find(thing => thing._id === +_id)
    res.send(oneThing)
})

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})