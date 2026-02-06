import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { text: 'Home', href: '#home' },
    { text: 'Services', href: '#menu' },
    { text: 'About', href: '#about' },
    { text: 'Portfolio', href: '#gallery' },
    { text: 'Referral', href: '#referral' },
    { text: 'Feedback', href: '#feedback' },
    { text: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => scrollToSection(item.href)}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          boxShadow: 'none',
          borderBottom: '1px solid #e5e5e5',
        }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'baseline', flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'normal', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
              Backstage
            </Typography>
            <Typography variant="h6" component="div" sx={{ fontFamily: '"La Belle Aurore", cursive', ml: 1, fontSize: '1.8rem', color: '#000' }}>
              Glamour
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                onClick={() => scrollToSection(item.href)}
                sx={{
                  mx: 1,
                  color: '#666',
                  '&:hover': {
                    color: 'black',
                    backgroundColor: 'transparent',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: 0,
                    height: '1px',
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'black',
                    transition: 'width 0.3s',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
