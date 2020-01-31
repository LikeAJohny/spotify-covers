const fs = require('fs');
const config = require('../../config/config.js');

const write = (token) =>
{
    const tokenValue = {
        accessToken: token
    };

    fs.writeFile(
        config.auth.tokenStore,
        JSON.stringify(tokenValue),
        onWrite
    );
};

const read = () =>
{
    return JSON.parse(fs.readFile(config.auth.tokenStore));
};

module.exports = { write, read };

const onWrite = (error) =>
{
    if (error) throw error;

    console.log('Saved');
};