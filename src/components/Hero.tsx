import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';

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
          <Typography variant="h1" component="h1" gutterBottom sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box component="span" sx={{ fontSize: '0.5em', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 400 }}>Backstage</Box>
            <Box component="span" sx={{ fontFamily: '"La Belle Aurore", cursive', mt: -2, mb: 1 }}>Glamour</Box>
          </Typography>
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
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
              alt="Backstage Glamour Studio"
              sx={{
                width: '100%',
                maxWidth: 500,
                height: 500,
                objectFit: 'cover',
                border: '1px solid #e5e5e5',
                filter: 'grayscale(100%)',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
