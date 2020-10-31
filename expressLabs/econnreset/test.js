const fetch = require('node-fetch');
    async function f() {
    const array = Array.from(Array(1000).keys());
    for (const el of array) {
      try {
        let id = Math.floor(Math.random() * 129) + 1;
        const result = await fetch(`http://localhost:3000/api/test/${id}`).then(res => res.json());
        console.log(result);
        return result;
      } catch(e) {
        console.log(e);
      }
    }
  }
  
  f();