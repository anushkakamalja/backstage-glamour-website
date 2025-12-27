import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  Avatar,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const AboutMe: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 10,
        backgroundColor: 'white',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 4, md: 0 } }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800"
                alt="Artist Portrait"
                sx={{
                  width: 300,
                  height: 400,
                  objectFit: 'cover',
                  border: '1px solid #e5e5e5',
                  filter: 'grayscale(100%)',
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" sx={{ letterSpacing: 2, color: '#999' }}>
              The Artist
            </Typography>
            <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 1 }}>
              About Me
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              Hi, I'm [Your Name], the founder and lead esthetician at Backstage Glamour. Established in 2014, my passion is helping clients feel confident and radiant in their own skin.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              I specialize in advanced skin treatments and precision lash artistry. My approach combines clinical expertise with a gentle, personalized touch to ensure every client leaves feeling refreshed and beautiful.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Continuous education is at the core of my practice. I stay updated with the latest techniques in chemical peels, high frequency therapy, and lash enhancements to provide you with the best results possible.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutMe;