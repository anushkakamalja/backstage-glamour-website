import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

const AboutMe: React.FC = () => {
  return (
    <Box id="about" className="aboutSection">
      <Box className="aboutInner">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="aboutImageWrapper">
              <Box
                component="img"
                src="/images/about-portrait.png"
                alt="Audra – Backstage Glamour Beauty Studio"
                className="aboutImage"
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" className="aboutLabel">
              The Artist
            </Typography>
            <Typography variant="h2" component="h2" gutterBottom className="aboutTitle">
              About Me
            </Typography>
            <Typography variant="body1" color="text.secondary" className="aboutParagraph">
              Hi, I'm <span className="aboutBioHighlight">Audra</span>, and beauty has been my passion for as long as I can remember.
            </Typography>
            <Typography variant="body1" color="text.secondary" className="aboutParagraph">
              With over <span className="aboutBioHighlight">25 years</span> in the industry, I've worked as a <span className="aboutBioHighlight">celebrity makeup artist</span>, taught future estheticians, and spent <span className="aboutBioHighlight">22+ years</span> perfecting lashes. I'm also the co-founder of <span className="aboutBioHighlight">ButterSky Beauty</span>, a clean cosmetics line created to make beauty feel effortless and fun.
            </Typography>
            <Typography variant="body1" color="text.secondary" className="aboutParagraph">
              What matters most to me is how my clients feel — confident, relaxed, and glowing from the inside out. Every service I offer is rooted in care, connection, and the belief that beauty isn't about perfection… it's about feeling amazing in your own skin.
            </Typography>
          </Grid>
        </Grid>

        <Box className="aboutDivider" />

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="aboutImageWrapper">
              <Box
                component="img"
                src="/images/asia-thorpe.png"
                alt="Asia Thorpe – Galaxy Flower Lab"
                className="aboutImage"
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" className="aboutLabel">
              Studio Partner
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom className="aboutTitle">
              Welcoming Asia Thorpe |{' '}
              <Link
                href="https://www.galaxyflowerlab.com/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="hover"
                sx={{ fontWeight: 700 }}
              >
                Galaxy Flower Lab
              </Link>
            </Typography>
            <Typography variant="body1" color="text.secondary" className="aboutParagraph">
              I'm excited to welcome Asia Thorpe of Galaxy Flower Lab, who will be offering her services in the studio on Tuesdays. Asia is an esthetician with over 25 years of experience and a passion for plant-based, holistic skincare.
            </Typography>
            <Typography variant="body1" color="text.secondary" className="aboutParagraph">
              She began her career formulating organic aromatherapy and herbal skincare products and later worked in several of Marin's top spas before launching her own botanical beauty line, Galaxy Flower Lab. Her facials blend natural skincare, aromatherapy, and techniques like Gua Sha and lymphatic massage to support healthy, radiant skin.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              <Link
                href="https://www.galaxyflowerlab.com/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                Visit galaxyflowerlab.com →
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutMe;