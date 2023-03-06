const express = require('express')
const router = express.Router()

let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.get('/', (req, res) => {
    res.json(fruits)
})

router.get('/:id', (req, res) => {
    index = req.params.id -1
    objFound = fruits[index]
    res.json(objFound)
})

module.exports = router