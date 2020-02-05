const axios = require('axios');
const config = require('../../config/config.js');
const TokenStorage = require('../Storage/TokenStorage.js');

const AuthMiddleware = (req, res, next) => 
{
    fetchToken()
        .then((response) => {
            return response.data.access_token;
        })
        .then(async(token) => {
            TokenStorage.write(token);
        })
        .catch((err) => {
            console.log('Error:');
            console.log(err);
        });

    next();
};

module.exports = AuthMiddleware;

const fetchToken = async () => 
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
    );
};