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
    <Box id="referral" className="referralSection">
      <Box className="containerNarrow">
        <Card className="referralCard">
          <CardContent>
            <CardGiftcardIcon className="referralIcon" />
            <Typography variant="h3" gutterBottom className="referralTitle">
              Refer a Friend
            </Typography>
            <Typography variant="h6" className="referralSubtitle">
              Share the glow and get rewarded.
            </Typography>
            <Typography variant="body1" className="referralBody">
              Invite a friend to Backstage Glamour and you'll both receive <Box component="span" className="referralHighlight">$20 OFF</Box> your next service! It's our way of saying thank you for being a part of our community.
            </Typography>
            <Button variant="outlined" size="large" className="referralButton">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Referral;
