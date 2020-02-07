const path = require('path')

const NotFoundHandler = (req, res, next) => 
{
    return res.status(404)
        .render(path.join(__dirname, '../Views/404.pug'));
};

module.exports = NotFoundHandler;