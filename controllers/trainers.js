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
      .then((trainerNew) => {
        req.session.trainerNew = trainerNew[0].id
        req.session.save(() => {
          res.render('trainers')
        })

      })
  },

}