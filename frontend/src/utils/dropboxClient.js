import { Dropbox } from 'dropbox';
import { refreshAccessToken } from './dropboxAuth';

export async function getDropboxClient() {
  let accessToken = localStorage.getItem('dropbox_access_token');
  const tokenExpiry = localStorage.getItem('dropbox_token_expiry');
  const refreshToken = localStorage.getItem('dropbox_refresh_token');

  if (!accessToken || new Date().getTime() >= tokenExpiry) {
    accessToken = await refreshAccessToken(refreshToken);
  }

  return new Dropbox({ accessToken });
}
