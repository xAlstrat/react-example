import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { scroller } from 'react-scroll';

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  fontWeight: 'bold',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
  },
}));

const CTA = ({ children, scrollTo = 'pricing', ...props }) => {
  const handleClick = () => {
    scroller.scrollTo(scrollTo, { smooth: true, duration: 500 });
  };

  return (
    <StyledButton
      variant="contained"
      color="secondary"
      size="large"
      onClick={handleClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default CTA;