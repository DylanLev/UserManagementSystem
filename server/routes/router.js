const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');


/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * @description Add user
 * @method GET /add-user
 */
route.get('/add-user', services.add_user);

/**
 * @description Update user
 * @method GET /update-user
 */
route.get('/update-user', services.update_user);

//API
route.post('/api/users', controller.create)
//When we make a GET request, we execute find method
route.get('/api/users', controller.find)
//We need the id to update/delete an user
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)

module.exports = route;