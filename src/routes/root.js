const express = require('express');

const CategoryRouter = require('./categories');
const LoginRouter = require('./login');
const UserRouter = require('./user');
const PostRouter = require('./posts');

const root = express.Router({ mergeParams: true });

root.use('/user', UserRouter);
root.use('/login', LoginRouter);
root.use('/categories', CategoryRouter);
root.use('/post', PostRouter);

module.exports = root;
