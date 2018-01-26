const knex = require("../db/knex.js");

module.exports = {


  index: function(req, res) {
    knex('form')
      .then((results) => {
        res.render('form');
      })
  },
  // create: function(req, res) {
  //   knex('form')
  //     .insert(req.body)
  //     .then(() => {
  //       res.redirect('pokemon');
  //     })
  // }

};
