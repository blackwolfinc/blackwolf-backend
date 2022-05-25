const Faker = require('@faker-js/faker');
const express = require('express')
const router = express.Router()


const randomName =  Faker.faker.name.findName() // Rowan Nikolaus

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/user', (req ,res ) =>{
  res.send(randomName)
})

module.exports =router