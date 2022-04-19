const passport = require('passport');  
const SpotifyStrategy = require('passport-spotify').Strategy;

/* eslint-disable no-unused-vars */
const SPOTIFY_CLIENT_ID = process.env['SPOTIFY_CLIENT_ID']
const SPOTIFY_CLIENT_SECRET = process.env['SPOTIFY_CLIENT_SECRET']
/* eslint-enable no-unused-vars */

passport.serializeUser(function(user, done) {  
  done(null, user);  
});
passport.deserializeUser(function(user, done) {  
  done(null, user);  
});
passport.use(new SpotifyStrategy({  
  clientID: SPOTIFY_CLIENT_ID,  
  clientSecret: SPOTIFY_CLIENT_SECRET,  
  callbackURL: "http://localhost:8000/auth/spotify/callback"  
},  
function(accessToken, refreshToken, profile, done) {  
  return done(null, profile);  
}
));