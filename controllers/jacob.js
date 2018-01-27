const knex = require("../db/knex.js");

module.exports = {

  index: function(req, res) {
    knex('trainers')
      .then((results) => {
        res.render('trainers/jacob');
      })

    create: (req, res) => {
      knex('trainers')
        .insert({
          id: 1,
          name: Jacob,
        }, '*')
        .then(() => {
          res.redirect('trainers/jacob')
        })

    }
  },


};