import * as React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/AddCircleOutline'
import DropDownIcon from '@mui/icons-material/ArrowDropDownOutlined';
export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, flexGrow: 1 }}
    >
      <Toolbar>
        <Typography variant="h5" noWrap component="div">
          <strong>BLACK LIST</strong>
        </Typography>
        <Box sx={{ flexGrow: 0.1 }} />
        <Button color="inherit" sx={{textTransform: "none"}} startIcon={<AddIcon />}>
          Add organization
        </Button>
        <Button color="inherit" sx={{textTransform: "none"}} startIcon={<AddIcon />}>
          Add customer
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button sx={{textTransform: "none"}} color="inherit" endIcon={<DropDownIcon/>}>Добро пожаловать</Button>
      </Toolbar>
    </AppBar>
  )
}
