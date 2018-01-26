//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const pokemon = require("../controllers/pokemon.js");


module.exports = function(app) {


  app.get('/', index.main);

  //Pokemon
  app.get('/pokemon', pokemon.index);

  app.post('/pokemon', pokemon.create);

  //Trainers
  // app.get('/trainers', trainers.index);
  //
  // app.post('/trainers', trainers.create);

  //In_gym
  // app.get('#', gym.index);
  //
  // app.post('#', gym.create);



};