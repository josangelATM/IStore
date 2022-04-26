import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import React, { useState } from "react";
import { Container } from "reactstrap";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setTheme } from '../../store/actions/index'
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next'
const pages = ['Home', 'Últimos productos','Libros','Juegos','Hogar'];

const NavBar = () =>{
    const { t, i18n } = useTranslation('common');
    const theme = useSelector(state => state.theme.theme)
    const dispatch = useDispatch()
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

    const handleThemeChange = () => {
      dispatch(setTheme())
    }

    const handleChangeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      handleClose();
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
              <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{t('navbar.home')}</Typography>
              </MenuItem>
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
            <Button
              sx={{ my: 0, color: 'inherit', display: 'block' }}
              LinkComponent={Link}
              to={`/home`}
            >
                {t('navbar.home')}
            </Button>
            <Button
              sx={{color: 'inherit', display: 'block' }}
              LinkComponent={Link}
              to={`/home`}
            >
                {t('navbar.lastest')}
            </Button>
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
                width: '8%',
                alignItems: 'center',
                justifyContent: 'center'
            }}
          >
            <IconButton sx={{ ml: 1}} color="inherit" onClick={handleThemeChange}>
                {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          <Box 
          sx={{
            mr:2
          }}
          >
            <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color="inherit"
            >
            {t('navbar.language')}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => handleChangeLanguage('es')}>Español</MenuItem>
              <MenuItem onClick={() => handleChangeLanguage('en')}>English</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default NavBar;