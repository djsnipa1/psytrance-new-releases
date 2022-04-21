const express = require('express')  
const app = express()  
const cookieSession = require('cookie-session')  
const passport = require('passport');  

require('./passport')
  app.use(cookieSession({  
  name: 'spotify-auth-session',    
  keys: ['key1', 'key2']  
}))  

app.use(passport.initialize());  

app.use(passport.session());
/*
app.get('/',(req,res)=>{  
  res.send(`Hello world ${req.user.displayName}`)  
})
*/

app.use(express.static(__dirname + '/img'))

app.get('/auth/error', (req, res) => res.send('Unknown Error'))
  app.get('/auth/spotify',passport.authenticate('spotify'))
    app.get('/auth/spotify/callback',passport.authenticate('spotify', { failureRedirect: '/auth/error' }),  
function(req, res) {  
  res.redirect('/');  
});
app.listen(8000,()=>{  
    console.log('Serve is up and running at the port 8000')  
})

const isLoggedIn = require('./Middleware/auth')
  
app.get('/', isLoggedIn,(req,res)=>{  
    res.send(`Hello world ${req.user.displayName}`)
})
app.get('/logout', (req, res) => {  
  req.session = null;  
  req.logout();   
  res.redirect('/');  
})