const { Router } = require('express');
const DevControllers = require('./controller/DevControllers');

const routes = Router();

routes.get('/devs', DevControllers.index);
// routes.get('/devs/:id', DevControllers.show);
routes.post('/devs', DevControllers.store);
routes.put('/devs', DevControllers.update);
routes.delete('/devs', DevControllers.destroy);

module.exports = routes;