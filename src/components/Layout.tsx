import BookIcon from '@mui/icons-material/Book';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Authors } from './Authors';
import { Books } from './Books';
import { Publishers } from './Publishers';

const drawerWidth = 240;

export function Layout () {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} style={{ background: "#4e413b" }}>
          <Toolbar>
            <Typography variant="h1" noWrap component="div" fontFamily={"Sawarabi Mincho"} fontWeight={1000} fontSize={25}>
              React書籍管理アプリ
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItem key="book" disablePadding>
                <ListItemButton
                  component={Link}
                  to="/books"
                  style={{fontFamily:"Sawarabi Mincho"}}
                >
                  <ListItemIcon>
                    <BookIcon />
                  </ListItemIcon>
                  書籍
                </ListItemButton>
              </ListItem>
              <ListItem key="author" disablePadding>
                <ListItemButton
                  component={Link}
                  to="/authors"
                  style={{fontFamily:"Sawarabi Mincho"}}
                >
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  著者
                </ListItemButton>
              </ListItem>
              <ListItem key="publisher" disablePadding>
                <ListItemButton
                  component={Link}
                  to="/publishers"
                  style={{fontFamily:"Sawarabi Mincho"}}
                >
                  <ListItemIcon>
                    <BusinessIcon />
                  </ListItemIcon>
                  出版社
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/authors">
            <Authors />
          </Route>
          <Route path="/publishers">
            <Publishers />
          </Route>  
        </Box>
      </Box>
    </BrowserRouter>
  )
}