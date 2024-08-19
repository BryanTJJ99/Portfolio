export async function exchangeCodeForTokens(authCode) {
    const response = await fetch('https://api.dropboxapi.com/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code: authCode,
        grant_type: 'authorization_code',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
        redirect_uri: import.meta.env.VITE_REDIRECT_URI,
      }),
    });
  
    const data = await response.json();
    const { access_token, refresh_token, expires_in } = data;
  
    // Save tokens and expiry time
    localStorage.setItem('dropbox_access_token', access_token);
    localStorage.setItem('dropbox_refresh_token', refresh_token);
    localStorage.setItem('dropbox_token_expiry', new Date().getTime() + expires_in * 1000);
  }
  
  export async function refreshAccessToken(refreshToken) {
    const response = await fetch('https://api.dropboxapi.com/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
      }),
    });
  
    const data = await response.json();
    const { access_token, expires_in } = data;
  
    // Update access token and expiry time
    localStorage.setItem('dropbox_access_token', access_token);
    localStorage.setItem('dropbox_token_expiry', new Date().getTime() + expires_in * 1000);
  
    return access_token;
  }
  