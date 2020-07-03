const { findOne, findAll, createOne } = require("../models/user");

const getOne = async (req, res, next) => {
  try {
    const data = await findOne();
    res.status(200).send({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const data = await findAll();
    res.status(200).send({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
      validParams(req.body)
    const data = await createOne();
    res.status(200).send({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};
const validParams = (params) => {
  const { name, state } = params
  if (!name) {
    throw new Error('name is missing!');
  }
  if(!state) {
    throw new Error('state is missing!');
  }
};
module.exports = { getOne, getAll, create };
