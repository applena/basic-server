'use strict';

// bring in an express library to use as the server
const express = require('express');

// this library allows me to access the variables in my .env file
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

// middleware
app.use(express.static('./public'));
 
// app.get('/', function (request, response) {
//   response.send('Hello World')
// })

// app.get('/bananas', (request, response) => {
//   response.send('Monkey');
// })
 
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})