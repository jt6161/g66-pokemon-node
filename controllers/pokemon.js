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

}
