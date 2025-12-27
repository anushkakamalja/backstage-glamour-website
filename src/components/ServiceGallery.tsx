import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

interface GalleryItem {
  title: string;
  image: string;
}

const ServiceGallery: React.FC = () => {
  const items: GalleryItem[] = [
    { 
      title: 'Lash Extensions', 
      image: '/images/lash_ext.jpeg' 
    },
    { 
      title: 'Brow Lamination', 
      image: '/images/brow_lam.jpeg' 
    },
    { 
      title: 'Chemical Peels', 
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      title: 'Microcurrent Toning', 
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      title: 'Makeup Artistry', 
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800' 
    },
  ];

  return (
    <Box
      id="gallery"
      sx={{
        py: 10,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, color: '#999' }}>
            Portfolio
          </Typography>
          <Typography variant="h2" component="h2" sx={{ mt: 1 }}>
            Our Work
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: index < 2 ? 6 : 4 }} key={item.title}>
              <Card sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: '100%',
                    height: 350,
                    objectFit: 'cover',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                    },
                  }}
                />
                <CardContent sx={{ textAlign: 'center', py: 2 }}>
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