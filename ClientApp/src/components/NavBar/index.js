import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import React, { useState } from "react";
import { Container } from "reactstrap";
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setTheme } from '../../store/actions/index'
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';

const pages = ['Home', 'Últimos productos','Libros','Juegos','Hogar'];

const NavBar = () =>{
    const theme = useSelector(state => state.theme.theme)
    const dispatch = useDispatch()
    const [anchorElNav, setAnchorElNav] = useState(null)
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

    const handleThemeChange = () => {
      dispatch(setTheme())
    }

    return(
        <AppBar position="static" color="primary">
        <Container maxWidth="xl" fluid>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 0, color: 'inherit', display: 'block' }}
                LinkComponent={Link}
                to={`/${page}`}
              >
                  {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: {xs:'none', md:'flex'}, alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'primary', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" color='secondary' label="Buscar..." variant="standard" sx={{
              input:'red'
            }}/>
          </Box>
          <Box
            sx={{
                display: 'flex',
                width: '10%',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1,
            }}
          >
            <IconButton sx={{ ml: 1}} color="inherit" onClick={handleThemeChange}>
                {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton sx={{ ml: 1}} color="inherit">
                <Brightness7Icon /> 
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default NavBar;