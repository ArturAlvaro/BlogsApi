const express = require('express');
const validate = require('../../middlewares/validate');
const authUser = require('../../middlewares/auth/user');
const { findByPk, findAll, create, deleteMe } = require('../../controllers/user');

const userRoute = express.Router({ mergeParams: true });

userRoute.get('/:id', validate, findByPk);
userRoute.get('/', validate, findAll);
userRoute.post('/', authUser, create);
userRoute.delete('/me', validate, deleteMe);

module.exports = userRoute;
