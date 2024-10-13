import React, { useState } from 'react';
import { Card, Button, Dialog, DialogContent, Grow } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
}));

const ToggleCardDialog = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const [cardContent, dialogContent] = React.Children.toArray(children);

  return (
    <>
      <StyledCard>
          {cardContent}
          <Button variant="contained" color="primary" onClick={handleToggle}>
            Learn More
          </Button>
      </StyledCard>
      <Dialog
        open={open}
        onClose={handleToggle}
        fullWidth
        maxWidth="md"
        TransitionComponent={Grow}
        TransitionProps={{ timeout: 500 }}
      >
        <DialogContent>
          {dialogContent}
          <Button variant="contained" color="primary" onClick={handleToggle}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ToggleCardDialog;