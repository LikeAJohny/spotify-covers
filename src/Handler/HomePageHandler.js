const path = require('path');

const HomePageHandler = (req, res) => 
{
    console.log(path.join(__dirname + '../../public/index.html'));
    return res.sendFile('lol');
};

module.exports = HomePageHandler;