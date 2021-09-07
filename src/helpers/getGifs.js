export const getGifs = async(category) => {
    const token = 'z00c0wJiES8r95HDCNYHXZ8fzTCANCRQ';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=${token}&limit=10`);
    const {data} = await resp.json();

   const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized.url
        }
   });

  return gifs;
}