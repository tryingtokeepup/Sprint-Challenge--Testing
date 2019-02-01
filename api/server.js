const express = require('express');

const db = require('./dbHelpers');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({
    hello:
      "it's a nice day to write servers and chew bubble gum, and I'm chewing servers because I like bubblegum. "
  });
});

server.get('/games', async (req, res) => {
  const games = { name: 'SuperMario' };

  res.status(200).json(games);
});

server.post('/games', async (req, res) => {
  const { name } = req.body;

  res.status(201).json({ name: `${name}` });
});
module.exports = server;
