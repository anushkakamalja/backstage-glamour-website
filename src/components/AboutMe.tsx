import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const AboutMe: React.FC = () => {
  return (
    <Box id="about" className="aboutSection">
      <Box className="aboutInner">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="aboutImageWrapper">
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800"
                alt="Artist Portrait"
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
      </Box>
    </Box>
  );
};

export default AboutMe;