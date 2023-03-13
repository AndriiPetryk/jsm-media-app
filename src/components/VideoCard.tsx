import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

type VideoCardType = {
  id: { videoId?: string | undefined }
  snippet: {
    title: string
    thumbnails?: {
      high?: { url?: string }
    }
    channelId?: string
    channelTitle?: string
  }
}

const VideoCard: FC<VideoCardType> = ({ id: { videoId }, snippet }) => (
  <Card
    sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}
  >
    <Link to={videoId ? `/video/${videoId}` : '/video/cV2gBU6hKfY'}>
      <CardMedia
        component='img'
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : ''}>
        <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
          {snippet?.title.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : ''}>
        <Typography variant='subtitle2' color='gray'>
          {snippet?.channelTitle}
          <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
)

export default VideoCard
