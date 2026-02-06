import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface Testimonial {
  quote: string;
  name: string;
  service?: string;
}

const Feedback: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: 'Audra is incredibly talented and made me feel so comfortable. My lashes looked amazing and natural.',
      name: '— Client',
      service: 'Lash Extensions',
    },
    {
      quote: 'The best brow lamination I\'ve ever had. I get so many compliments!',
      name: '— Client',
      service: 'Brow Lamination & Tint',
    },
    {
      quote: 'Professional, relaxing, and my skin has never looked better. Can\'t recommend enough.',
      name: '— Client',
      service: 'Classic Facial',
    },
  ];

  return (
    <Box id="feedback" className="feedbackSection">
      <Box className="container">
        <Box className="sectionHeader">
          <Typography variant="overline" className="sectionLabel">
            Testimonials
          </Typography>
          <Typography variant="h2" component="h2" className="sectionTitle">
            Kind Words
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card className="feedbackCard">
                <CardContent className="feedbackCardContent">
                  <FormatQuoteIcon className="feedbackQuoteIcon" />
                  <Typography variant="body1" className="feedbackQuote">
                    {item.quote}
                  </Typography>
                  <Typography variant="body2" className="feedbackName">
                    {item.name}
                  </Typography>
                  {item.service && (
                    <Typography variant="caption" className="feedbackService">
                      {item.service}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Feedback;
