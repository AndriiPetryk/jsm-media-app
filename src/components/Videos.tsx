import React, { FC } from 'react'
import { Stack, Box } from '@mui/material'

import { ChannelCard, Loader, VideoCard } from './'
import { channelDetail } from './ChannelCard'

type VideosType = {
  videos: channelDetail[]
  direction?: string | undefined
}
const Videos: FC<VideosType> = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />

  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' alignItems='start' gap={2}>
      {videos.map((item: channelDetail, idx: number) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard {...item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
