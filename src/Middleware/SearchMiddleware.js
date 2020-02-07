const SearchSpotify = require('../Service/SearchSpotify.js');

const SearchMiddleware = async (req, res, next) => 
{
    req.searchResult = await SearchSpotify.search(escape(req.body.searchTerm));

    next();
};

module.exports = SearchMiddleware;