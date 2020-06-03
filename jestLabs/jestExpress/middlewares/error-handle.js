const getErrors =  (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    status: true,
    message: err,
  });
}

module.exports = getErrors;

