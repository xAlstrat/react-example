import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Orbitron", sans-serif',
  fontWeight: 700,
  fontSize: '1.5rem',
  color: theme.palette.primary.main,
  letterSpacing: '0.1em',
  '& span': {
    color: theme.palette.secondary.main,
  },
}));

const Logo = () => {
  return (
    <LogoText variant="h6" component="div">
      <span>+</span>CODER
    </LogoText>
  );
};

export default Logo;