const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const config = require('../config');

const options = {
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.SECRET_TOKEN
}
module.exports = passport => {
    passport.use(
        new jwtStrategy(options, async (payload, done) =>{
            const user = await User.findById(payload.userId).select('email id')
            try {
                if (user) {
                    done(null, user)

                } else {
                    done(null, false)
                }
            } catch (err) {
            console.error(err);
            } 
        })
    );
}