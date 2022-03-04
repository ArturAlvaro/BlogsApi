const express = require('express');
const path = require('path');
const cors = require('cors');
const errorController = require('../controllers/errorController');
const rootRouter = require('../routes/root');

const app = express();
app.use(express.json());

app.use(cors());

app.use(express(path.resolve(__dirname, '..', 'uploads')));
app.use('/', rootRouter);
app.use(errorController);

module.exports = app;
