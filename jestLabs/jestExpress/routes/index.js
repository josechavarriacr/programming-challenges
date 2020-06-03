const express = require('express')
const router = express.Router()
const routerUsers = require('./users')
const getErrors = require('../middlewares/error-handle')

// api
router.get('/', (req, res) => {
  res.status(200).send({
    status: true,
    message: 'conected!',
  });
});

// api/test
router.use('/test', (req, res, next) => {
  res.status(200).send({
    status: true,
    message: 'helloooo',
  })
})

// api/users
router.use('/users', routerUsers);

// 404 not found
router.all('*', (req, res) => {
  res.status(404).send({
    status: false,
    message: 'The route does not exists'
  });
});

// 505 error
router.use(getErrors);

module.exports = router