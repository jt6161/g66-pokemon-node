const knex = require('../db/knex.js');

module.exports = {

  index: (req, res) => {
    res.render('pokemon');

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
      .then((pokemonNew) => {
        req.session.pokemonNew = pokemonNew[0].id
        req.session.save(() => {
          res.redirect('/pokemon')
        })

      })
  },

}