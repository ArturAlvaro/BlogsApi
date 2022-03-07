const express = require('express');
const validate = require('../../middlewares/validate');
const authUser = require('../../middlewares/auth/user');
const { findByPk, findAll, create, deleteMe } = require('../../controllers/user');
const multer = require('../../middlewares/multer');

const userRoute = express.Router({ mergeParams: true });

userRoute.get('/:id', validate, findByPk);
userRoute.get('/', validate, findAll);
userRoute.post('/', multer.single('image'), authUser, create);
userRoute.delete('/me', validate, deleteMe);

module.exports = userRoute;
