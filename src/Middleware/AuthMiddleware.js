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
            await TokenStorage.write(token);
            console.log(TokenStorage.read());
        })
        .catch((err) => {
            console.log(err.response);
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
                //'Authorization': authHeader,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
            },
            data: `grant_type=${config.auth.grantType}&client_id=${config.auth.clientId}&client_secret=${config.auth.clientSecret}`,
        }
    );
};