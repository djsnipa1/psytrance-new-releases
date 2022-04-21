const isLoggedIn = (req, res, next) => {  
  if (req.user) {  
    next();  
  } else {  
    res.status(401).send(html);  
  }  
}
module.exports = isLoggedIn

let html = `<!doctype html> <html lang=en> <head> <meta charset=UTF-8> <meta content="IE=Edge" http-equiv=X-UA-Compatible> <meta content="width=device-width,initial-scale=1" name=viewport> <title>HTML</title> <link href=https://cdn.simplecss.org/simple.min.css rel=stylesheet> </head> <style>.responsive{max-width:90%;height:auto}img{display:block;margin-left:auto;margin-right:auto;width:90%}.center{margin:auto width: 50%;text-align:center;padding:10px}</style> <body> <h3 class=center>You are not logged in</h3> <a href=/login><img alt="Login to Spotify" class=responsive src=login.png></a> `