const FetchAlbum = require('../Service/FetchAlbum.js');

const SearchAlbumsMiddleware = (req, res, next) => 
{
    const searchTerm = req.body;
    console.log(searchTerm);

    //console.log(FetchAlbum(albumId));

    next();
};

module.exports = SearchAlbumsMiddleware;