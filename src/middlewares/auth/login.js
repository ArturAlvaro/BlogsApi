const jwt = require('jsonwebtoken');
const { StatusCodes: { BAD_REQUEST } } = require('http-status-codes');

const { Users } = require('../../models');
const { invalidFields } = require('../../helpers');
const schemaLogin = require('../../schema/login');

const API_SECRET = 'segredosecreto';

const authLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const { error } = schemaLogin.validate({ email, password });
    if (error) return res.status(BAD_REQUEST).json({ message: error.details[0].message });

    const findEmail = await Users.findOne({ where: { email, password } });
    if (!findEmail) return res.status(BAD_REQUEST).json(invalidFields);

    const { dataValues: { password: userPassword, ...userInfo } } = findEmail;
    req.user = userInfo;
    console.log(userInfo);
    req.token = jwt.sign({ data: findEmail }, API_SECRET);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authLogin;
