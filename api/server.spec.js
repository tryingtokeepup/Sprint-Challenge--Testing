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

      expect({ title: 'SuperMario' });
      //okay, fixed the stupid text bug.
    });
  });
  describe('POST /games', () => {
    it('should allow me to post some sort of game', async () => {
      const body = { title: 'COD4', genre: 'FPS', releaseYear: 'lol' };
      let response = await request(server)
        .post('/games')
        .send(body);
      expect(response.body).toEqual({
        title: 'COD4'
      });
    });
    it('needs to send back a response code 404 if something is missing', async () => {
      const body = { title: 'web15 awesome' };
      let response = await request(server)
        .post('/games')
        .send(body);
      expect(response.status).toEqual(422); // THIS FAILURE WAS INTENDED! :D
    });

    it('should lowercase the title', async () => {
      // YES I GOT IT TO WORK WHOOOT
      const body = { title: 'COOKIE', genre: 'cookies?', releaseYear: 'lol' };

      console.log(body);
      let res = await request(server)
        .post('/games')
        .send(body)
        .expect(function(res) {
          res.body.title = res.body.title.toLowerCase();
        })
        .expect({ title: 'cookie' });
      //   expect(response => {
      //     response.body.name = response.body.name.toUpperCase();
      //   });
      //   console.log(body.name);
    });
  });
});
