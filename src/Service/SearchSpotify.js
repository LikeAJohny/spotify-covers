const axios = require('axios');
const token = require('../Storage/TokenStorage.js').read();

const search = async (searchTerm) => {
    try {
        return await axios(
            {
                method: 'GET',
                url: `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist,album,track&market=DE`,
                headers: {
                    'Authorization': 'Bearer ' + token.accessToken,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },        
            }
        ).then(result => result.data);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { search };