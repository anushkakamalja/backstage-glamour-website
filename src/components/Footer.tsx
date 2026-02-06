import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Link,
  Divider,
} from '@mui/material';
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
    <Box className="footerSection">
      <Box className="container">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box className="footerBrand">
              <Typography variant="h6" className="footerBrandMain">
                Backstage
              </Typography>
              <Typography variant="h6" className="footerBrandGlamour">
                Glamour
              </Typography>
            </Box>
            <Typography variant="body2" className="footerTagline">
              Transforming beauty, one client at a time. Experience the difference with our professional beauty services.
            </Typography>
            <Box className="footerSocialWrap">
              <FacebookIcon className="footerSocialIcon" />
              <InstagramIcon className="footerSocialIcon" />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" className="footerColumnTitle">
              Quick Links
            </Typography>
            <Box className="footerLinks">
              <Link component="button" variant="body2" onClick={() => scrollToSection('#home')} className="footerLink">
                Home
              </Link>
              <Link component="button" variant="body2" onClick={() => scrollToSection('#menu')} className="footerLink">
                Services
              </Link>
              <Link component="button" variant="body2" onClick={() => scrollToSection('#about')} className="footerLink">
                About
              </Link>
              <Link component="button" variant="body2" onClick={() => scrollToSection('#gallery')} className="footerLink">
                Portfolio
              </Link>
              <Link component="button" variant="body2" onClick={() => scrollToSection('#contact')} className="footerLink">
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" className="footerColumnTitle">
              Services
            </Typography>
            <Box className="footerLinks">
              <Typography variant="body2" className="footerText">Lash Extensions</Typography>
              <Typography variant="body2" className="footerText">Lash Lift & Tint</Typography>
              <Typography variant="body2" className="footerText">Makeup Application</Typography>
              <Typography variant="body2" className="footerText">Chemical Peels</Typography>
              <Typography variant="body2" className="footerText">High Frequency</Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" className="footerColumnTitle">
              Contact Info
            </Typography>
            <Box className="footerLinks">
              <Link
                href="https://www.google.com/maps/search/?api=1&query=311+Miller+Ave+Suite+H-1+Mill+Valley+CA+94941"
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                className="footerLink"
                sx={{ display: 'block' }}
              >
                📍 311 Miller Ave, Suite H-1, Mill Valley, CA 94941
              </Link>
              <Typography variant="body2" className="footerText">📞 (650) 425-0858</Typography>
              <Typography variant="body2" className="footerText">✉️ backstageglamour@gmail.com</Typography>
              <Typography variant="body2" className="footerText">🕒 Mon-Fri: 9AM-7PM</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider className="footerDivider" />

        <Box className="footerCopyright">
          <Typography variant="body2" className="footerText">
            © 2024 Backstage Glamour. BEAUTY STUDIO EST. 2014. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
