const passIsRequired = {
  message: '"password" is required',
};

const emailIsRequired = {
  message: '"email" is required',
};

const displayLength = {
  message: '"displayName" length must be at least 8 characters long',
};

const validEmail = {
  message: '"email" must be a valid email',
};

const passLength = {
  message: '"password" length must be 6 characters long',
};

const alreadyExists = {
  message: 'User already registered',
};

const invalidFields = {
  message: 'Invalid fields',
};

const missingToken = {
  message: 'Token not found',
};

const expired = {
  message: 'Expired or invalid token',
};

const userNotFound = {
  message: 'User does not exist',
};

const missingName = {
  message: '"name" is required',
};

const missingCategory = {
  message: '"categoryIds" not found',
};

const missingPost = {
  message: 'Post does not exist',
};

const unauthorizedUser = {
  message: 'Unauthorized user',
};

const cannotEditCategories = {
  message: 'Categories cannot be edited',
};

module.exports = {
  passIsRequired,
  emailIsRequired,
  displayLength,
  validEmail,
  passLength,
  alreadyExists,
  invalidFields,
  missingToken,
  expired,
  userNotFound,
  missingName,
  missingCategory,
  missingPost,
  unauthorizedUser,
  cannotEditCategories,
};
