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
  const games = { title: 'SuperMario', genre: 'Arcade', releaseYear: '1970' };

  res.status(200).json(games);
});

server.post('/games', async (req, res) => {
  const { title, genre, releaseYear } = req.body;
  if (!title || !genre) {
    res.status(422).json({
      message:
        'Hey man, remember to put in a title AND a genre. releaseYear boolean is optional, but hey, put it in why doncha?'
    });
  } else {
    res.status(201).json({ title: `${title}` });
  }
});
module.exports = server;
