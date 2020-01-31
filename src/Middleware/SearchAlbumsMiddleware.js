const FetchAlbum = require('../Service/FetchAlbum.js');

const SearchAlbumsMiddleware = (req, res, next) => 
{
    console.log(req.body);
    const albumId = req.body.albumId;

    console.log(FetchAlbum(albumId));

    next();
};

module.exports = SearchAlbumsMiddleware;