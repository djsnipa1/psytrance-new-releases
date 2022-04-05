const fetch = require('node-fetch');

const SpotifyWebApi = require('spotify-web-api-node');
const token = 'BQA4ou4t_6WHYu9AA_nuE6CvXU-9-9CqujW6BzpJhX6sdyg3Jy0aApFzOxICWuEfOFJScopxzWW3W-CTz9ceEQg2Ps2z28xH-5eEi3UCJDQnEVcz8hmqY0X13sLpTF9XC5taVBHqPiIKNYTXfvyb2wGLLloII8jRh8dp4g7ctEwIzMf4he0mNhfttDRiNQ6-lamdSDaI-Oc_60HkGIV8YYJo0mjaAzdNd_XEnpdv3BIGXXKANQ297bWmcPR_KbvTo5GS2fZT2BZwQ7MpR_y9rh-7JNFQRKXDrWfVN_IehTv5R0o36AwT';

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    console.log(me.body);
    // getUserPlaylists(me.body.id);
  })().catch(e => {
    console.error(e);
  });
}
// getMyData()

function newReleases() {
  (async () => {
    const newRel = await spotifyApi.getNewReleases({ limit: 1 });
    console.log(newRel.body.albums);
    const albums = newRel.body.albums;
    //for album in albums
    console.log(albums);
  })().catch(e => {
    console.error(e);
  });
}

// newReleases()

function getDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  console.log(today);

}
getDate();

function figlefy() {
  const figlefyAPI = 'https://figlefy.djsnipa1.repl.co/figlefy/';
  let myString = 'dope';

  fetch(figlefyAPI + encodeURIComponent(myString))
    .then(res => res.text())
    .then(figlefied => {
      console.log(figlefied);
    });

}
figlefy();