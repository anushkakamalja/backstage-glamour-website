import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

interface GalleryItem {
  title: string;
  image: string;
}

const ServiceGallery: React.FC = () => {
  const items: GalleryItem[] = [
    { 
      title: 'Lash Extensions', 
      image: '/images/lash_ext.png' 
    },
    { 
      title: 'Chemical Peels', 
      image: '/images/chemical_peels.png' 
    },
    { 
      title: 'Microcurrent Facial', 
      image: '/images/microcurrent_facial.png' 
    },
    { 
      title: 'Makeup Application', 
      image: '/images/makeup_application.png' 
    },
    { 
      title: 'High Frequency Facial', 
      image: '/images/high_frequency_facial.png' 
    },
  ];

  return (
    <Box id="gallery" className="gallerySection">
      <Box className="container">
        <Box className="sectionHeader">
          <Typography variant="overline" className="sectionLabel">
            Portfolio
          </Typography>
          <Typography variant="h2" component="h2" className="sectionTitle">
            Our Work
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: index < 2 ? 6 : 4 }} key={item.title}>
              <Card className="galleryCard">
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  className="galleryImage"
                />
                <CardContent className="galleryCardContent">
                  <Typography variant="h6" component="h3">
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServiceGallery;