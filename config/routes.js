//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const pokemon = require("../controllers/pokemon.js");
const trainers = require("../controllers/trainers.js");
const form = require("../controllers/form.js");

module.exports = function(app) {


  app.get('/', index.main);

  //Pokemon
  app.get('/pokemon', pokemon.index);

  app.post('/pokemon', pokemon.create);

  //Trainers
  app.get('/trainers', trainers.index);

  app.post('/trainers', trainers.create);


  //FORM PAGE TO ADD NEW POKEMON

  app.get('/form', form.index);

  app.post('/form', form.create);




  //In_gym
  // app.get('#', gym.index);
  //
  // app.post('#', gym.create);



};