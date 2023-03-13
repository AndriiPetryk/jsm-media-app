import { useState, useEffect, FC } from 'react'
import { Typography, Box } from '@mui/material'
import { useParams } from 'react-router-dom'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos } from './'

export const VideoDetail = [
  {
    id: { videoId: '', channelId: '' },
    snippet: {
      title: '',
      thumbnails: {
        high: { url: '' },
      },
      channelId: '',
      channelTitle: '',
    },
    statistics: {
      viewCount: '0',
      likeCount: '0',
      subscriberCount: '0',
    },
  },
]
const SearchFeed: FC = () => {
  const [videos, setVideos] = useState(VideoDetail)
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <Box p={2} minHeight='95vh'>
      <Typography variant='h4' fontWeight={900} color='white' mb={3} ml={{ sm: '100px' }}>
        Search Results for <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>
      <Box display='flex'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default SearchFeed
