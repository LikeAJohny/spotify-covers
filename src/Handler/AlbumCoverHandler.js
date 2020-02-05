const path = require('path');

const AlbumCoverHandler = (req, res) =>
{
    return res.sendFile(path.join(__dirname + '../../../public/search.html'));
};

module.exports = AlbumCoverHandler;