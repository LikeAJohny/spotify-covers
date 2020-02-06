const fs = require('fs');
const config = require('../../config/config.local.js');

const write = (token) =>
{
    fs.writeFileSync(
        config.auth.tokenStore,
        JSON.stringify(token),
        onWrite
    );
};

const read = () =>
{
    return JSON.parse(fs.readFileSync(config.auth.tokenStore));
};

const isAlive = () =>
{
    const token = read(),
        expiryDate = new Date(token.expiresAt),
        nowDate = new Date();

    if (expiryDate > nowDate) return true;

    return false;
};

module.exports = { write, read, isAlive };

const onWrite = (error) =>
{
    if (error) throw error;

    console.log('Saved');
};