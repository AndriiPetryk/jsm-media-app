import React, { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { categories } from '../utils/constants'

const SideBar = () => {
  return (
    <Stack
      direction='row'
      sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: 'column' }}
    >
      {categories.map((category, index) => (
        <React.Fragment key={index}>
          <span>{category.name}</span>
        </React.Fragment>
      ))}
    </Stack>
  )
}
export default SideBar
