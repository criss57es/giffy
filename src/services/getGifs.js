const apiKey = 'gVFBXM3FBXZBynzzty9FRcY4vjmuNTuv'


export default function getGifs({ keyword = 'panda', limit = 5, offset = 0 } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=en`
  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => {
        const { id, title } = image
        const {url} = image.images.downsized_medium
        return {id, title, url}
      }
        
        
        )
      return gifs
    })
}