const knex = require( '../db/knex.js' );

module.exports = {


    index: function ( req, res ) {
        knex( 'pokemon' )
            .insert( req.body )
            .then( () => {
                res.render( 'pokemon' )
            } )
    },
    create: function ( req, res ) {
        knex( 'pokemon' )
            .where( 'id', req.body.id )
            .then( ( results ) => {
                res.render( 'pokemon' )
            } )
    },
    add: function ( req, res ) {
        knex( 'pokemon' )
            .where( 'id', req.params.id )
            .then( ( result ) => {
                req.session
            } )
    }









};