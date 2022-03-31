

const Spotify = require('spotify-web-api-node');
const spotifyApi = new Spotify({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
});

router.get('/login', (_, res) => {
    const state = generateRandomString(16);
    res.cookie(STATE_KEY, state);
    res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
  });

  router.get('/callback', (req, res) => {
    const { code } = req.query;
    spotifyApi.authorizationCodeGrant(code).then(data => {
      const { expires_in, access_token, refresh_token } = data.body;
      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);
      res.redirect(`/#/user/${access_token}/${refresh_token}`);
    }).catch(err => {
      res.redirect('/#/error/invalid token');
    });
  });


