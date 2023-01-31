export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1imQaFG6wu21Ubo6nPIPc9EelYRWSKSy&q=${category}&limit=10`

    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((imagen) => {
        return {
            id: imagen.id,
            title: imagen.title,
            url: imagen.images.downsized_medium.url
        }
    })

    return gifs;
    // console.log(gifs);

};