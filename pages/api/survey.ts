import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import ky from 'ky-universal';
import { getConfig } from '../../config';

export default withApiAuthRequired(async function user(req, res) {
  // If your Access Token is expired and you have a Refresh Token
  // `getAccessToken` will fetch you a new one using the `refresh_token` grant
  const { accessToken } = await getAccessToken(req, res);
  const apiUrl = getConfig('API_URL')

  const user = await ky(apiUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }).json();

  res.status(200).json(user);
});
