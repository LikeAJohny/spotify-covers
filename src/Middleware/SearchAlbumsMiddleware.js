const FetchAlbum = require('../Service/FetchAlbum.js');

const SearchAlbumsMiddleware = (req, res, next) => 
{
    const albumId = req.body.albumId;

    console.log(FetchAlbum(albumId));

    next();
};

module.exports = SearchAlbumsMiddleware;