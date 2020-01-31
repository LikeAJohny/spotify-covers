const FetchAlbum = (albumId) => {
    const response = axios(
        {
            method: 'GET',
            url: `https://api.spotify.com/v1/search?q=Periphery+Stan&type=album&market=DE`,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },        
        }
    )
    .then(response => response.data)
    .then((data) => {
        //console.log(data);
        //data.albums.items.forEach((album) => {
        //    console.log(album);
        //});
    })
    .catch((err) => {
        console.log(err.response);    
    });
};

module.exports = FetchAlbum;