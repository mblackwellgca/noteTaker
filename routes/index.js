const express = require('express');

//Import our modular routers for notes
const apiRoutes = require('./apiRoutes');

const app = express();

app.use('/notes', apiRoutes);
//app.use('/', htmlRoutes);


module.exports = app;