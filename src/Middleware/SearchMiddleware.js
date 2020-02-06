const SearchSpotify = require('../Service/SearchSpotify.js');

const SearchMiddleware = (req, res, next) => 
{
    const searchTerm = req.body.searchTerm;
    let result;

    SearchSpotify.search(searchTerm)
        .then((data) => {
            result = data;
        })
        .catch((err) => {
            console.log(err);
        });

    console.log(result);
    req.searchResult = result;

    next();
};

module.exports = SearchMiddleware;