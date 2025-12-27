import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { theme } from './theme';
import { Header, Hero, ServiceMenu, AboutMe, ServiceGallery, Referral, Contact, Footer } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <Header />
        <Hero />
        <ServiceMenu />
        <AboutMe />
        <ServiceGallery />
        <Referral />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
