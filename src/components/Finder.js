import React from 'react'
import { Typography, IconButton, Box, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export default function Finder(props) {
  return (
    <Box sx={{ display: 'flex' , pt: 2, pb: 2}}>
      <Typography color="inherit" variant='h5' sx={{flexGrow: 1}}>{props.text}</Typography>
      <Paper
        variant="outlined"
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 , borderColor: '#4B0082'}}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Поиск"
        />
        <IconButton color="primary" type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  )
}
