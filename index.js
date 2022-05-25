
// const http = require('http');
const Faker = require('@faker-js/faker');

// const hostname = '127.0.0.1';
// const port = 3000;


// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(randomName);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require('express')
const router = require('./Routers')
const app = express()
const port = 3000

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
  

app.use(myLogger)
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})