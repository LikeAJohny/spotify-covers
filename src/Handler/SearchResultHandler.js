const path = require('path');

const SearchResultHandler = (req, res) =>
{
    const searchTerm = typeof req.body.searchTerm === 'undefined' ? '' : req.body.searchTerm;
    
    return res.render(
        path.join(__dirname + '../../Views/search'), 
        {
            searchTerm : searchTerm,
            artists: typeof req.searchResult === 'undefined' ? {}: req.searchResult.artists.items,
            albums: typeof req.searchResult === 'undefined' ? {}: req.searchResult.albums.items,
        }
    );
};

module.exports = SearchResultHandler;