export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SL993WMt3qpdAiB7WNH6dKUSjTV5dktI&q=${category}&limit=12`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    // console.log(resp)
    // console.log(gifs)
    return gifs
}