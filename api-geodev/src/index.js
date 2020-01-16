const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// mongoose.connect('', {
//     useNewUrlParser: true,
// });

app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE
// Query parm, Route Param, Body
