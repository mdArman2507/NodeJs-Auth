const passport=require('passport');
const JWTStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;

const User=require('../models/User');

let opts={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'codeial'
}

passport.use(new JWTStrategy(opts,function(jwtPayLoad,done){
    User.findById(jwtPayLoad._id,function(err,user){
        if(err)
        {
            console.log('error in finding user form JWT');
            return;
        }
        if(user)
        {
            return done(null,user);
        }
        else
        {
            return done(null,user);
        }
    });
}));
module.exports=passport;