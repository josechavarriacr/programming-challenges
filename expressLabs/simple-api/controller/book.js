const models = require( '../models/index');
const Sequelize = require('sequelize');

function create(req, res) {
  const { title, description } = req.body
  const { userId } = req.params
  return Book
    .create({
      title,
      description
    })
    .then(book => res.status(201).send({
      message: `Your book with the title ${title} has been created successfully `,
      book
    }))
  }

async function list(res, next) {
 try {
    const data = await models.Book.findAll({
      where: {
        state: { 
          [Sequelize.Op.ne]: -1 
        },
      },
    });
    res.status(201).send({
      message: `List of all pets available`,
      data,
    });
  } catch (error) {
    next(error)
  }
}

function update(req, res) {
  const { title, author, description, quantity } = req.body
  return Book
    .findById(req.params.bookId)
    .then((book) => {
      book.update({
        title: title || book.title,
        description: description || book.description
      })
      .then((updatedBook) => {
        res.status(200).send({
          message: 'Book updated successfully',
          data: {
            title: title || updatedBook.title,
            description: description || updatedBook.description,
          }
        })
      })
      .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

function remove(req, res) {
  return Book
    .findById(req.params.bookId)
    .then(book => {
      if(!book) {
        return res.status(400).send({
        message: 'Book Not Found',
        });
      }
      return book
        .destroy()
        .then(() => res.status(200).send({
          message: 'Book successfully deleted'
        }))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error))
}
// }
module.exports = {
  list,
  create,
  update,
  remove
}
