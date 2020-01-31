const path = require('path');

const AlbumCoverHandler = (req, res) =>
{
    console.log(req.get('access_token'));
    return res.sendFile(path.join(__dirname + '../../../public/album-cover.html'));
};

module.exports = AlbumCoverHandler;