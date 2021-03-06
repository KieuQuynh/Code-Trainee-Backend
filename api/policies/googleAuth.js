/**
 * isAuthenticated
 *
 * @module      :: Policy
 * @description :: Simple policy to require an authenticated user, or else return 401 status
 *                 Looks for an Authorization header a valid JWT token
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
const passport = require('passport');
const passportGoogle = passport.authenticate('googleToken', {session : false, scope: ['profile', 'email']})
module.exports = async function(req, res, next) {
   console.log(req.query)
   req.role = 1
   passportGoogle(req,res,next)
   //next()
};
