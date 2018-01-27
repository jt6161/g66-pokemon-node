const knex = require("../db/knex.js");

module.exports = {

  index: function(req, res) {
    res.render('form');
  },
  create: (req, res) => {
    knex('pokemon')
      .insert({
        id: req.session.user,
        name: req.body.name,
        trainer_id: req.body.trainer_id,
        cp: req.body.cp,
        in_gym: req.body.in_gym
      }, '*')
      .then(() => {
        res.redirect('/pokemon')
      })
  }

};