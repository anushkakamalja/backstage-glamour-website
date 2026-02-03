import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
} from '@mui/material';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
        pt: 8,
        pb: 8,
      }}
    >
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="/images/logo.png"
            alt="Backstage Glamour Beauty Studio Est. 2014"
            sx={{
              maxWidth: '100%',
              width: 320,
              height: 'auto',
              mb: 3,
              display: 'block',
            }}
          />
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: '#666',
              mb: 4,
              fontSize: '1.2rem',
              lineHeight: 1.6,
            }}
          >
            Experience luxury beauty treatments in a serene, professional environment.
            Our expert stylists use premium products to enhance your natural beauty.
          </Typography>
          <Box>
            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollToSection('#menu')}
              sx={{ mr: 2, mb: 2 }}
            >
              Explore Services
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => scrollToSection('#contact')}
              sx={{ mb: 2 }}
            >
              Book Appointment
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src="/images/hero.png"
              alt="Backstage Glamour makeup artistry"
              sx={{
                width: '100%',
                maxWidth: 500,
                height: 500,
                objectFit: 'cover',
                border: '1px solid #e5e5e5',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
