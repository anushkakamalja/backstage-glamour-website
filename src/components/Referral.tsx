import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const Referral: React.FC = () => {
  return (
    <Box
      id="referral"
      sx={{
        py: 10,
        backgroundColor: '#000',
        color: '#fff',
      }}
    >
      <Box sx={{ maxWidth: 800, mx: 'auto', px: 3 }}>
        <Card
          sx={{
            backgroundColor: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 0,
            textAlign: 'center',
            p: 4,
          }}
        >
          <CardContent>
            <CardGiftcardIcon sx={{ fontSize: 60, mb: 2, color: '#fff' }} />
            <Typography variant="h3" gutterBottom sx={{ color: '#fff' }}>
              Refer a Friend
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 4, fontWeight: 400 }}>
              Share the glow and get rewarded.
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 4, lineHeight: 1.8 }}>
              Invite a friend to Backstage Glamour and you'll both receive <Box component="span" sx={{ color: '#fff', fontWeight: 700 }}>$20 OFF</Box> your next service! It's our way of saying thank you for being a part of our community.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#fff',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#000',
                  borderColor: '#fff',
                },
              }}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Referral;
