const url = 'https://api.giphy.com/v1/gifs/'
const getGifs = async (category) => {
  const path = `${url}search?api_key=IwonXTvkOcCfDjLpWqjltJsxJ9bmkfPk&q=${category}&limit=20`
  const response = await fetch(path)
  const { data } = await response.json()
  const newData = data.map((gif) => ({
    id: gif?.id,
    title: gif?.title,
    image: gif?.images?.downsized_medium?.url,
  }))

  return newData
}

export {
  getGifs
}