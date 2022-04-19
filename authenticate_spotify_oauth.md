# Authenticate your App with Spotify OAuth.

![](https://miro.medium.com/max/1400/1*0uR3pFpaPFeSpvDJfYAe0g.png)

In this blog, I will demonstrate how to implement Spotify OAuth with Node and Passport JS. To implement this, we will be using a third-party library called Passport JS. Passport JS is authentication middleware for Node and Express JS. Passport JS can be used with any Express JS applications. Passport JS provides 500 + strategies.

__passport-spotify__

__Passport strategy for authenticating with Spotify using the OAuth 2.0 API. This module lets you authenticate using…__

www.passportjs.org

[](http://www.passportjs.org/packages/passport-spotify/)

---

## Table of contents:

1.  [Initializing a Node JS Project](#f952)
2.  [Creating a Spotify OAuth Client ID](#dde1)
3.  [Configure Spotify OAuth](#35db)
4.  [Protecting Route and Adding Logout](#ef47)

### **1.) Initializing a Node JS Project**

First, let’s create a new Node js Project. The below commands create a new folder and then initialize the node to our project.

```shell
mkdir spotify_passport  
cd spotify_passport/  
npm init -y  
touch index.js
```

Now install the required packages:

```shell
npm i express cookie-session passport passport-spotify
```

After installing, copy the below code to your `index.js` file.

`index.js`

```javascript
const express = require('express')  
const app = express()app.get('/',(req,res)=>{  
  res.send('Hello world')  
})app.listen(8000,()=>{  
  console.log('Serve is up and running at the port 8000')  
})
```

Now start the server using `node index.js`. Then navigate to [http://localhost:8000/](http://localhost:8000/). You should see “Hello world” displayed in the browser.

## 2. Creating a Spotify OAuth Client ID

Before using the passport’s Spotify Authentication strategy, you should have registered your app or web application with Spotify. To do that, follow the steps below.

Navigate to the following link:

[developer.spotify.com](https://developer.spotify.com/dashboard/applications)

The link navigates you to the Spotify developer’s dashboard. Hit the Create App button.

![](https://miro.medium.com/max/1400/1*Vblwueuuun-YH8Ep24hW1Q.png)

Upon clicking, a model will be displayed where you will be asked to enter a name for your app. Submit those details if you wish and hit the “Create” button.

![](https://miro.medium.com/max/1400/1*9HMqsqLuQcuv1je9deqlow.png)

Once a new app has been created, you will be redirected to a dashboard where you will see a client ID and Client Secret. Make a note of the Client ID and Client Secret which we will be using later. Now hit the “Edit Settings” button. Again a model dialog will open. Add your website URL and callback URL as I did below.

![](https://miro.medium.com/max/6356/1*QaTeA6Aptng5PR2eBYuryg.png)

![](https://miro.medium.com/max/2452/1*nM9-kfNZhEle7j9TgeRCUg.png)

## 3. Configure Spotify OAuth

Now let’s start integrating Spotify Authentication with our project. To do that I am creating a new file named `passport.js` which holds the credentials that we created from Spotify’s OAuth page.

`passport.js`

```javascript
const passport = require('passport');  
const SpotifyStrategy = require('passport-spotify').Strategy;

passport.serializeUser(function(user, done) {  
  done(null, user);  
});
passport.deserializeUser(function(user, done) {  
  done(null, user);  
});
passport.use(new SpotifyStrategy({  
  clientID: "720***********************1ad",  
  clientSecret: "9e*********************************cb",  
  callbackURL: "http://localhost:8000/auth/spotify/callback"  
},  
function(accessToken, refreshToken, profile, done) { 
  return done(null, profile);  
}
));
```

Copy and paste the below code to your `index.js` file.

The route `/auth/spotify` redirects the client to the Spotify’s Login Page.

The route `/auth/spotify/callback` will act as a callback URL which will be called if the Spotify authentication is successful.

The route `/ath/error` will be called if any error has occurred during Spotify Authentication.

`index.js`

```javascript
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

app.get('/',(req,res)=>{  
  res.send(`Hello world ${req.user.displayName}`)  
})

app.get('/auth/error', (req, res) => res.send('Unknown Error'))
  app.get('/auth/spotify',passport.authenticate('spotify'));
  app.get('/auth/spotify/callback',passport.authenticate('spotify', { failureRedirect: '/auth/error' }),  
  function(req, res) {  
    res.redirect('/');  
});

app.listen(8000,()=>{  
    console.log('Serve is up and running at the port 8000')  
})
```

Now navigate to [http://localhost:8000/auth/spotify](http://localhost:8000/auth/spotify). You will be redirected to Spotify’s login page. Upon logging into your Spotify account, you will be redirected back to our webpage and you will see your Spotify user name displayed on our webpage.

## 4. Protecting Route and Adding Logout

Now let’s add middleware to see if the user has logged in or not. To do that, I am creating a file named `auth.js` in the middleware folder.

`Middleware/auth.js`

```javascript
const isLoggedIn = (req, res, next) => {  
  if (req.user) {  
    next();  
  } else {  
    res.status(401).send('Not Logged In');  
  }  
}
module.exports = isLoggedIn
```

Once done, pass the middleware to the route `/`. Now navigate to the URL `[http://localhost:8000/](http://localhost:8000/auth).` Automatically you will be redirected to the `/auth/spotify` route.

Now let’s create a function for logout. Just by calling the function `req.logout()` you can logout from the Spotify Account.

`index.js`

```javascript
const isLoggedIn = require('./Middleware/auth')app.get('/', isLoggedIn,(req,res)=>{  
    res.send(`Hello world ${req.user.displayName}`)  
})app.get('/logout', (req, res) => {  
  req.session = null;  
  req.logout();   
  res.redirect('/');  
})
```

Navigate to [http://localhost:8000/logout](http://localhost:8000/logout). You will be logged out.

Feel free to contact me for any queries.

Email: sjlouji10@gmail.com

Linkedin: [https://www.linkedin.com/in/sjlouji/](https://www.linkedin.com/in/sjlouji/)

Complete code on my GitHub:

[sjlouji/Passport-Strategies---Medium](https://github.com/sjlouji/Passport-Strategies---Medium/tree/master/spotify_clonne)

Happy Coding!


