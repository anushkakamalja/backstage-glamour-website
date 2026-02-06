import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const Referral: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
              Clients and their referrals will receive <Box component="span" className="referralHighlight">$25 off</Box> any service over $50.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              className="referralButton"
              onClick={() => setModalOpen(true)}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </Box>

      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 0,
            padding: 1,
          },
        }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pr: 6 }}>
          How it works
          <IconButton
            aria-label="close"
            onClick={() => setModalOpen(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box component="ol" sx={{ pl: 2.5, m: 0, '& li': { mb: 1.5 } }}>
            <Typography component="li" variant="body1">
              Share your name with a friend who’s new to Backstage Glamour.
            </Typography>
            <Typography component="li" variant="body1">
              When they book any service over $50 and mention you, they receive <strong>$25 off</strong>.
            </Typography>
            <Typography component="li" variant="body1">
              You receive <strong>$25 off</strong> your next service over $50 as a thank-you.
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Have questions? Reach out when you book or contact us—we’re happy to help.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setModalOpen(false)} variant="contained">
            Got it
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Referral;
