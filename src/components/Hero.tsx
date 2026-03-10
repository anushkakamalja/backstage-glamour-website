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
    <Box id="home" className="heroSection">
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="/images/logo.png"
            alt="Backstage Glamour Beauty Studio Est. 2014"
            className="heroLogo"
          />
          <Typography variant="h6" component="p" className="heroTagline">
          Step into Backstage Glamour, where expert artistry meets effortless luxury. Polished, radiant looks crafted to make you shine—backstage style
          </Typography>
          <Box className="heroButtons">
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
          <Box className="heroImageWrap">
            <Box
              component="img"
              src="/images/hero.png"
              alt="Backstage Glamour makeup artistry"
              className="heroImage"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
