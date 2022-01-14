const jwt = require('jsonwebtoken');
const { StatusCodes: { BAD_REQUEST, CONFLICT } } = require('http-status-codes');

const { Users } = require('../../models');
const { alreadyExists } = require('../../helpers');
const schemaUser = require('../../schema/user');

const API_SECRET = 'segredosecreto';

const authUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  try {
    const { error } = schemaUser.validate({ displayName, email, password, image });
    if (error) return res.status(BAD_REQUEST).json({ message: error.details[0].message });

    const findEmail = await Users.findOne({ where: { email } });
    if (findEmail) return res.status(CONFLICT).json(alreadyExists);

    const created = await Users.create({ displayName, email, password, image });
    req.user = created;
    req.token = jwt.sign({ data: created }, API_SECRET);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authUser;
