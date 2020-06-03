const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.status(200).send({
      status: 'OK',
      message: "hello from express.js",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
