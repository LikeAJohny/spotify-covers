const axios = require('axios');
const config = require('../../config/config.local.js');

const FetchToken = async () =>
{
    return await axios(
        {
            method: 'POST',
            url: config.auth.authUri,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
            },
            data: `grant_type=${config.auth.grantType}&client_id=${config.auth.clientId}&client_secret=${config.auth.clientSecret}`,
        }
    ).then((response) => {
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + response.data.expires_in/60/60);
        
        const token = {
            accessToken: response.data.access_token,
            expiresAt: expiresAt
        };

        return token;
    });
};

module.exports = FetchToken;