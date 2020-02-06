const path = require('path');

const SearchResultHandler = (req, res) =>
{
    console.log(req.searchResult);
    return res.sendFile(path.join(__dirname + '../../../public/search.html'));
};

module.exports = SearchResultHandler;