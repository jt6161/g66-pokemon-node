const knex = require('../db/knex.js');

module.exports = {

  index: (req, res) => {
    res.render('trainers');

  },
  create: (req, res) => {
    knex('trainers')
      .insert({
        id: req.session.user,
        name: req.body.name,
      }, '*')
      .then((trainerNew) => {
        req.session.trainerNew = trainerNew[0].id
        req.session.save(() => {
          res.redirect('/trainers')
        })

      })
  },

}