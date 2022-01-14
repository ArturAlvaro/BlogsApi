const express = require('express');
const errorController = require('../controllers/errorController');
const rootRouter = require('../routes/root');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/', rootRouter);
app.use(errorController);

module.exports = app;
