"use client"
import React, { useState } from 'react';
import {Box,Toolbar,IconButton,Typography,Menu, AppBar, Container, Avatar, Button,Tooltip, MenuItem, CardMedia} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '@/public/images/logo.png'
import Image from 'next/image';

const pages = ['Home', 'About Us', 'Pricing', 'Features'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor:'transparent', boxShadow:'none', padding:'0 2rem'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{marginX:6}}>
        <Image
        src={logo}
        alt="Mask image"
        placeholder="blur"
        style={{ width: "auto", height: "2rem", objectFit: "cover" }}
      />


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems:'center' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={i===0 ? {color:'#FF5555', fontWeight:'600'} : {color:'black'}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft:'1rem' }}>
            {pages.map((page, i) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={i === 0 ? {  color: '#FF5555', display: 'block', fontFamily:'Clash Display', fontWeight:'800' } : {  color: 'black', display: 'block', fontFamily:'Clash Display' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button sx={{bgcolor:'black', textTransform:'none', color:'white', fontFamily:'Clash Display', fontWeight:'700', letterSpacing:'0.1rem', padding:'0.8rem 2.5rem',border:'1px solid black', '&:hover':{border:'1px solid black', bgcolor:'transparent', color:'black',fontWeight:'700'}}}>Download</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

