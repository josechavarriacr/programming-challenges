const express = require('express')
const router = express.Router()
const { getOne, getAll, create } = require('../controllers/users')

router.route('/')
    .get(getAll)
    .post(create)

router.route('/:id')
.get(getOne)

module.exports = router