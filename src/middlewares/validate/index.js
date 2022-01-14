const { StatusCodes: { UNAUTHORIZED } } = require('http-status-codes');

const jwt = require('jsonwebtoken');
const { missingToken, expired } = require('../../helpers');

const API_SECRET = 'segredosecreto';

const checkToken = (token) => {
  try {
    const { data } = jwt.verify(token, API_SECRET);

    return data;
  } catch (e) {
    return null;
  }
};

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(UNAUTHORIZED).json(missingToken);

  const result = checkToken(authorization);
  if (!result) return res.status(UNAUTHORIZED).json(expired);
  
  req.user = result;
  next();
};
