//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const pokemon = require("../controllers/pokemon.js");
const form = require("../controllers/form.js");

module.exports = function(app) {


  app.get('/', index.main);

  //pokemon
  app.get('/pokemon', pokemon.index);

  // app.post('/pokemon', pokemon.create);

  //new pokemon form

  app.get('/form', form.index);

  // app.post('/form', form.create);

  //Trainers

}
