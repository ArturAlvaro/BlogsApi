const {
  emailIsRequired,
  passIsRequired,
  displayLength,
  validEmail,
  passLength,
} = require('../../helpers');

const checkPassword = (password) => {
  switch (true) {
    case (!password):
      return passIsRequired;
    case (password.length < 6):
      return passLength;
    default:
      return false;
  }
};

const checkDisplay = (displayName) => {
  switch (true) {
    case (displayName.length < 8):
      return displayLength;
    default:
      return false;
  }
};

const checkUser = (email) => {
  const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;

  switch (true) {
    case (!email):
      return emailIsRequired;
    case (!regex.test(email)):
      return validEmail;
    default:
      return false;
  }
};

module.exports = { checkUser, checkPassword, checkDisplay };
