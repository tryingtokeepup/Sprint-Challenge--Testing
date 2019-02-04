module.exports = {
  getAll
};

function getAll() {
  return db('games');
}
