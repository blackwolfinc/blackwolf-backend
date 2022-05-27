const Faker = require('@faker-js/faker');
const express = require('express')
const router = express.Router()
const connect = require('./connection')

// new code 

router.get('/user', async (req ,res ) =>{
  try {
    if (connect.connect()) {
      const db = connect.db('db_latihan')
      const users  = await db.collection('users').find().toArray()
      res.send({data : users})
    }
    else{
      res.send({message : "Server Terputus"})
    }

    
  } catch (error) {
    res.send({message : error.message || "Internal server eror"})
  }

})





// Legacy Code 

// const randomName =  Faker.faker.name.findName() // Rowan Nikolaus

// router.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// router.get('/user', (req ,res ) =>{
//   res.send(randomName)
// })

module.exports =router