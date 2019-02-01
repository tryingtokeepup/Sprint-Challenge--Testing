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

module.exports = server;
