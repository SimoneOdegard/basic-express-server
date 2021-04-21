'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('**VALIDATOR TEST**' , () => {

  it('should respond with 500 on an error', () => {
    return mockRequest.get('/person').then(data => {
      expect(data.status).toEqual(500);
      
    })
  });

  it('should respond with 200 on a success', async () => {
    const response = await mockRequest.get('/person?name=Simone');
      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('Simone');
      
    })

});
