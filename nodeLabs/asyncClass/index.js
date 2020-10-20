const axios = require('axios');

class Test {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/posts/1';
        this.response = null
    }

    getFetchOne() {
        try {
            return this.data.id;
          } catch (error) {
            console.log(error);
          }
    }

    getFetchTwo() {
        try {
            // const response = await axios.get(this.url);
            return this.response.data.title;
          } catch (error) {
            console.log(error);
          }
    }

    async init() {
       const response = await axios.get(this.url);
       const obj = new Test()
       const msj = obj.getFetchOne.call(response)
       return  `this is the message: ${msj}`
    }
}


async function main() {
    const test = new Test()
    const aux = await test.init()
    console.log('aux', aux);
}

main()