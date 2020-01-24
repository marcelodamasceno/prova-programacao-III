const { Router } = require('express');
const PartController = require('./controllers/PartController');

const routes = Router();



routes.get('/participantes', PartController.index);
routes.post('/participantes', PartController.store);

module.exports = routes;