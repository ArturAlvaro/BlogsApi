const express = require('express');
const validate = require('../../middlewares/validate');
const { create, findAll } = require('../../controllers/categories');

const categoryRoute = express.Router({ mergeParams: true });

categoryRoute.post('/', validate, create);
categoryRoute.get('/', validate, findAll);

module.exports = categoryRoute;
