import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const darkColors = {
  dark1: '#121212',
  dark2: '#1E1E1E',
  dark3: '#2C2C2C',
};

const StyledSection = styled(Box)(({ theme, index, customPadding, bgColor }) => ({
  padding: customPadding !== undefined ? customPadding : theme.spacing(8, 2),
  background: bgColor ? darkColors[bgColor] : (index % 2 === 0 ? theme.palette.background.default : theme.palette.background.paper),
  color: theme.palette.text.primary,
  position: 'relative',
}));

const ContentWrapper = styled(Box)({
  position: 'relative',
});

const Section = ({ children, index, id, padding, bgColor }) => {
  return (
    <StyledSection component="section" id={id} index={index} customPadding={padding} bgColor={bgColor}>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </StyledSection>
  );
};

export default Section;