import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Link,
  Divider,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#999',
        py: 6,
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'normal', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>
                Backstage
              </Typography>
              <Typography variant="h6" sx={{ color: '#fff', fontFamily: '"La Belle Aurore", cursive', fontSize: '1.5rem', mt: -1 }}>
                Glamour
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
              Transforming beauty, one client at a time. Experience the difference with our professional beauty services.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FacebookIcon sx={{ color: '#999', cursor: 'pointer', '&:hover': { color: '#fff' } }} />
              <InstagramIcon sx={{ color: '#999', cursor: 'pointer', '&:hover': { color: '#fff' } }} />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                component="button"
                variant="body2"
                onClick={() => scrollToSection('#home')}
                sx={{
                  color: '#999',
                  textDecoration: 'none',
                  textAlign: 'left',
                  '&:hover': { color: '#fff' }
                }}
              >
                Home
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => scrollToSection('#menu')}
                sx={{
                  color: '#999',
                  textDecoration: 'none',
                  textAlign: 'left',
                  '&:hover': { color: '#fff' }
                }}
              >
                Services
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => scrollToSection('#about')}
                sx={{
                  color: '#999',
                  textDecoration: 'none',
                  textAlign: 'left',
                  '&:hover': { color: '#fff' }
                }}
              >
                About
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => scrollToSection('#gallery')}
                sx={{
                  color: '#999',
                  textDecoration: 'none',
                  textAlign: 'left',
                  '&:hover': { color: '#fff' }
                }}
              >
                Portfolio
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => scrollToSection('#contact')}
                sx={{
                  color: '#999',
                  textDecoration: 'none',
                  textAlign: 'left',
                  '&:hover': { color: '#fff' }
                }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ color: '#999' }}>Lash Extensions</Typography>
              <Typography variant="body2" sx={{ color: '#999' }}>Lash Lift & Tint</Typography>
              <Typography variant="body2" sx={{ color: '#999' }}>Makeup Application</Typography>
              <Typography variant="body2" sx={{ color: '#999' }}>Chemical Peels</Typography>
              <Typography variant="body2" sx={{ color: '#999' }}>High Frequency</Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ color: '#999' }}>
                📍 123 Beauty Avenue
              </Typography>
              <Typography variant="body2" sx={{ color: '#999' }}>
                📞 (555) 123-4567
              </Typography>
              <Typography variant="body2" sx={{ color: '#999' }}>
                ✉️ hello@backstageglamour.com
              </Typography>
              <Typography variant="body2" sx={{ color: '#999' }}>
                🕒 Mon-Fri: 9AM-7PM
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: '#333' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#999' }}>
            © 2024 Backstage Glamour. BEAUTY STUDIO EST. 2014. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
