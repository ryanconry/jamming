let accessToken = '';
let expirationTime;
const clientId = '64027370d3a54447ba24a1a5016de0d7';
const redirectURI = 'http://localhost:3000/';
const Spotify = {

  getAccessToken(){
    if(accessToken){
      return accessToken;
    }
    if(window.location.href.match('/access_token=([^&]*)/') &&
     window.location.href.match('/expires_in=([^&]*)/')){
       accessToken = window.location.href.match('/access_token=([^&]*)/');
       expiresIn = window.location.href.match('/expires_in=([^&]*)/');
       window.setTimeout(() => accessToken = '', expiresIn * 1000);
       window.history.pushState('Access Token', null, '/');
     }
     if(accessToken==='' && !window.location.href.match('/access_token=([^&]*)/')){
       window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`)
     }



  }
};
export Spotify;
