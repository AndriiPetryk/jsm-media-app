import axios from 'axios'

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

console.log('process.env.REACT_APP_RAPID_API_KEY', process.env.REACT_APP_RAPID_API_KEY)

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '10b8db292bmsh025de81eb82b0f2p14e3d1jsnec1d94a5b783' || '',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

export const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
