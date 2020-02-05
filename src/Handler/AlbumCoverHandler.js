const path = require('path');

const AlbumCoverHandler = (req, res) =>
{
    return res.sendFile(path.join(__dirname + '../../../public/album-cover.html'));
};

module.exports = AlbumCoverHandler;