const app = require('../server') 
const supertest = require('supertest')
const request = supertest(app)

describe('Test #1', () => {
    test('endpoint /api', async done => {
        const response = await request.get('/api')
      
        expect(response.status).toBe(200)
        expect(response.body.status).toBe(true)
        done()
      })
})