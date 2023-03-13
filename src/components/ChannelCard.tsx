import React, { FC } from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Link } from 'react-router-dom'

export type channelDetail = {
  id: { channelId: string; videoId?: string }
  snippet: {
    title: string
    thumbnails: { high: { url: string } }
  }
  statistics: { subscriberCount: string }
}
type ChannelCardType = {
  channelDetail: channelDetail
  marginTop?: string
}

const ChannelCard: FC<ChannelCardType> = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <CardMedia
          component='img'
          image={channelDetail?.snippet?.thumbnails?.high?.url}
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: '50%',
            height: '180px',
            width: '180px',
            mb: 2,
            border: '1px solid #e3e3e3',
          }}
        />
        <Typography variant='h6'>
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')}{' '}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
)

export default ChannelCard
