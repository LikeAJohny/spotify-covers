const SearchSpotify = require('../Service/SearchSpotify.js');

const SearchMiddleware = async (req, res, next) => 
{
    req.searchResult = await SearchSpotify.search(req.body.searchTerm);

    next();
};

module.exports = SearchMiddleware;