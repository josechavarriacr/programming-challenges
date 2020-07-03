const { Router } = require('express');
const book = require('../controller/book');
const {
  list,
  create,
  update,
  remove
} = book;

const router = Router()

router.route('/').get(list)
router.route('/').post(create)
router.route('/:id').put(update)
router.route('/:id').delete(remove)

module.exports = router
