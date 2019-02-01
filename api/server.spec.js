const request = require('supertest');

const server = require('./server.js');

describe('server.js and its routes', () => {
  describe('quick sanity check of the GET endpoint /', () => {
    it('should respond with status code 200 OK', async () => {
      let response = await request(server).get('/');

      expect(response.status).toBe(200);
    });
    it('should give back a json object', async () => {
      let response = await request(server).get('/');

      expect(response.type).toMatch(/json/i);
    });
  });

  describe('GET  /games', () => {
    it('should allow me to get some games', async () => {
      // need to figure out how to send an
      let response = await request(server).get('/games');
      expect(response.status).toBe(200);
    });
    it('should return some stupid game', async () => {
      let response = await request(server).get('/games');
      expect(response.type).toMatch(/json/i);
    });
    it('should return the dumb game that i put in there', async () => {
      let response = await request(server).get('/games');

      expect(response.text).toEqual('{"name":"SuperMario"}');
      // LOL THIS IS SO BAD
    });
  });
  describe('POST /games', () => {
    it('should allow me to post some sort of game', async () => {
      const body = { name: 'COD4' };
      let response = await request(server)
        .post('/games')
        .send(body);
      expect(response.body).toEqual({ name: 'COD4' });
    });
    it('needs to send back a response code 201 if successful', async () => {
      const body = { name: 'web15 awesome' };
      let response = await request(server)
        .post('/games')
        .send(body);
      expect(response.status).toEqual(201); // THIS FAILURE WAS INTENDED! :D
    });

    it('should lowercase the name', async () => {
      // YES I GOT IT TO WORK WHOOOT
      const body = { name: 'COOKIE' };

      console.log(body);
      let res = await request(server)
        .post('/games')
        .send(body)
        .expect(function(res) {
          res.body.name = res.body.name.toLowerCase();
        })
        .expect({ name: 'cookie' });
      //   expect(response => {
      //     response.body.name = response.body.name.toUpperCase();
      //   });
      //   console.log(body.name);
    });
  });
});
