const fetch = require('node-fetch');

const SpotifyWebApi = require('spotify-web-api-node');
const token = 'BQAPVU1mR5UHBx8gKSwYOxQrCBJ1YMz9KvRjOJMaV3p2psoFp-RDgfn-N8Kbc2s8_Q6MLyGFbc1Tn-z1F0Buht7dgVkD59LkiTnQVOUwsmiEDKto_jrKI6IQBeo7VG5kkBDekNVB5vZn4z1woaRC-UCSF6YgbWcD7NUWDhZ-rHB2A4sS8eFXqyrIkuPsX_S4TSv52R0lFxHsBBsxrUbZR-UaE086faxA7yI0nZE3BF1lca4-HGyTU7AHuvF1IHq52dzn1vmW3qGBOUZ7m5TKh2m_N1fxRm6YmKtfMR0DHazOrctsVFzx';

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