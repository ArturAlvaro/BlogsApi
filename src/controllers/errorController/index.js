module.exports = (err, _req, res, _next) => {
  const statusByErrorCode = {
    badRequest: 400,
    notFound: 404,
    alreadyExists: 409,
    unprocessableEntity: 422,
  };

  const status = statusByErrorCode[err.code] || 500;
  console.log(err);

  return res.status(status).json({ err: { message: err.message } });
};
