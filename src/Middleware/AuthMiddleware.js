const FetchToken = require('../Service/FetchToken.js');
const TokenStorage = require('../Storage/TokenStorage.js');

const AuthMiddleware = (req, res, next) => 
{
    if (TokenStorage.read() && TokenStorage.isAlive()) return next();

    FetchToken()
        .then(async(token) => {
            TokenStorage.write(token);
        })
        .catch((err) => {
            console.log(err);
        });

    next();
};

module.exports = AuthMiddleware;