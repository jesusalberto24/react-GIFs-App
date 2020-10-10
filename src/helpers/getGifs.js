export const getGifs = async (categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&Limit=10&api_key=q55g0dbM39F5bUpoPNjJYF2qPdLGH5Lg`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs
    //console.log(gifs);
}