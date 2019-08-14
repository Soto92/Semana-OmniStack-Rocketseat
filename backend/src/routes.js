const express = require('express');
const routes = express.Router();
const DevController = require('./controllers/DevController')


//install insomnia software (test api)
routes.post('/devs', DevController.store);

module.exports = routes;