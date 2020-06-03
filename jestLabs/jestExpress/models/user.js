const dto = {
    id: 1000,
    name: 'Jane Joe',
    state: 'CA'
  }

  const list = [
    {
        id: 1000,
        name: 'Jane Doe',
        state: 'CA'
      },
      {
        id: 2000,
        name: 'John Doe',
        state: 'NY'
      },
      {
        id: 3000,
        name: 'Jose Jose',
        state: 'MX'
      }
  ]

const findOne = async(id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(dto), 100);
    })
}

const findAll = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(list), 100);
    })
}

const createOne = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(dto), 100);
    })
}

module.exports = { findOne, findAll, createOne }