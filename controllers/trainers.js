const knex = require('../db/knex.js');

module.exports = {

  index: (req, res) => {
    knex('trainers').then((results) => {
      res.render('trainers', {
        trainers: results
      });
    })
  },

  create: (req, res) => {
    knex('trainers')
      .insert({
        id: req.session.user,
        name: req.body.name,
      }, '*')
      .then(() => {
        req.session.save(() => {
          res.render('trainers')
        })

      })
  },

}