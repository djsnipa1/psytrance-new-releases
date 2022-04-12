const fetch = require('node-fetch');

const SpotifyWebApi = require('spotify-web-api-node');
const token = 'BQCwA1FJ6uCSWcjDLGBHCIrI4Do95KlnHgC7ferzGsnNJjPKPuceV1WPT8FpAkLCwgRnZnpfb00uC8Pj4I_d4SLcy_sXHq4yB86SPOce8qldjDLtrXPCCPgceSRsa8ZE8g1XVmde2sNuntSNFINRDBLtMGodA4D43g3R-KCL4_uXmAXJIWNh3HxnOcUfjP7AYtn-hEN1-tcJ9hWO_2jqrzhj7v7M3YxYL8-u8rrvLVsx_sllxtZ1Ah8Npy-BFYzQX6qfeEnxBdaTwpzuBIzESWLyxFDJ8SAUmTc9LRoAqTWU0r8GxpR-';

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    console.log(me.body.display_name);
    const displayName = me.body.display_name;
    figlefy(displayName);
    // getUserPlaylists(me.body.id);
  })().catch(e => {
    console.error(e);
  });
}
getMyData()

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

function figlefy(name) {
  const figlefyAPI = 'https://figlefy.djsnipa1.repl.co/figlefy/';
  let myString = name;

  fetch(figlefyAPI + encodeURIComponent(myString))
    .then(res => res.text())
    .then(figlefied => {
      console.log(figlefied);
    });

}
// figlefy();
