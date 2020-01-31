const path = require('path')

const NotFoundHandler = (req, res, next) => 
{
    return res.status(404)
        .sendFile(path.join(__dirname, '../../public/404.html'));
};

module.exports = NotFoundHandler;