const path = require('path');

const HomePageHandler = (req, res) => 
{
    return res.sendFile('lol');
};

module.exports = HomePageHandler;