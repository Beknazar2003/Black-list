import Header from './components/Header'
import { ThemeProvider, Toolbar } from '@mui/material'
import theme from './theme'
import SideBar from './components/SideBar'
import { Box } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'

function App() {
  const routes = useRoutes()
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Box sx={{ display: 'flex' }}>
            <Header />
            <SideBar />
            <Box component="main" sx={{ flexGrow: 1, top: 240 }}>
              <Toolbar />
              {routes}
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
