const express = require('express');
const authLogin = require('../../middlewares/auth/login');
const { create } = require('../../controllers/login');

const loginRoute = express.Router({ mergeParams: true });

loginRoute.post('/', authLogin, create);

module.exports = loginRoute;
