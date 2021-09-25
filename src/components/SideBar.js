import * as React from 'react'
import { Toolbar, Drawer, Box, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import Logo from '../welcome.svg'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import SquareIcon from '@mui/icons-material/DashboardOutlined'
import GroupIcon from '@mui/icons-material/GroupOutlined'
import { makeStyles } from '@material-ui/styles'
import {NavLink} from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles({
  paper: {
    background: '#430075',
    color: '#fff',
  },
  list: {
    background: '#4B0082',
  },
  disabling: {
    color: '#c6c6c6'
  }
})

export default function SideBar() {
  const classes = useStyles()
  return (
    <Drawer
      classes={{ paper: classes.paper }}
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', pt: 2}}>
        <Box sx={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center', pb: 2}}>
        <img src={Logo} alt="logo" />
        <br/>
        <Typography>Добро пожаловать</Typography>
        
        </Box>
        <List>
          <ListItem sx={{background: '#4B0082', marginBottom: '5px'}} disablePadding>
            <NavLink to='/' style={{color: '#fff', textDecoration: 'none'}}>
            <ListItemButton selected>
              <ListItemIcon sx={{color: '#fff'}}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{fontSize: '12px'}} primary="Главная" />
            </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem sx={{background: '#4B0082', marginBottom: '5px'}} disablePadding>
          <NavLink to='/orgs' style={{color: '#fff', textDecoration: 'none'}}>
            <ListItemButton>
              <ListItemIcon sx={{color: '#fff'}}>
                <SquareIcon />
              </ListItemIcon>
              <ListItemText primary="Список организаций" />
            </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem sx={{background: '#4B0082', marginBottom: '5px'}} disablePadding>
          <NavLink to='/employees' style={{color: '#fff', textDecoration: 'none'}}>
            <ListItemButton>
              <ListItemIcon sx={{color: '#fff'}}>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Список сотрудников" />
            </ListItemButton>
            </NavLink>
          </ListItem>
          </List>
      </Box>
    </Drawer>
  )
}
