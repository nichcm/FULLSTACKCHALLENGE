const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose');

const app = express()
const port = 3002

app.use(cors())
routes(app)


mongoose
  .connect('mongodb://localhost:27018/', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(`erro mongoose ${error}`);
  });


app.listen(port, () => console.log(`servidor rodando na porta ${port}`))

module.exports =  app