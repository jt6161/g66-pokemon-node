const knex = require("../db/knex.js");

module.exports = {

  index: function(req, res) {
    res.render('jacob');
  },

  create: function(req, res) {
    knex('trainers')
      .insert(req.body)
      .then(() => {
        res.redirect('jacob')
      })
  },

}