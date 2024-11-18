import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import CTA from 'components/Button/CTA';
import BashDisplay from 'components/BashDisplay';
import AnimatedElement from 'components/AnimatedElement';
import AnimatedText from 'components/AnimatedText';
import Section from 'components/Section';
import HighlightedText from 'components/HighlightedText';

const HeroWrapper = styled(Box)(({ theme }) => ({
  background: theme.custom.heroGradient,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M95 -40 L95 95 L-40 95 L-40 105 L95 105 L95 240 L105 240 L105 105 L240 105 L240 95 L105 95 L105 -40 Z' fill='rgba(255,255,255,0.05)' transform='rotate(-15 100 100)'/%3E%3C/svg%3E")`,
    backgroundSize: '200% 200%',
    backgroundPosition: '25% center',
    opacity: 0.7,
    zIndex: 0,
    pointerEvents: 'none',
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: theme.spacing(2),
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  }
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.75rem',
    lineHeight: 1.2
  }
}));

const AnimatedTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',
  marginBottom: '16px',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const FixedWidthBox = styled(Box)(({ theme }) => ({
  width: '350px',
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}));

const glowAnimation = keyframes`
  0% { text-shadow: 0 0 5px rgba(255,255,255,0.7), 0 0 10px rgba(255,255,255,0.7); }
  50% { text-shadow: 0 0 20px rgba(255,255,255,0.7), 0 0 30px rgba(255,255,255,0.7); }
  100% { text-shadow: 0 0 5px rgba(255,255,255,0.7), 0 0 10px rgba(255,255,255,0.7); }
`;

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Orbitron", sans-serif',
  fontWeight: 700,
  fontSize: '2.5rem',
  color: theme.palette.primary.main,
  letterSpacing: '0.1em',
  marginBottom: theme.spacing(4),
  animation: `${glowAnimation} 3s ease-in-out infinite`,
  filter: 'blur(0.5px)',
  '& span': {
    color: theme.palette.secondary.main,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginBottom: theme.spacing(3),
  }
}));

const Hero = () => {
  return (
    <Section id="hero" index={0} padding={0}>
      <HeroWrapper>
        <HeroContent>
          <LogoText variant="h1" component="div">
            <span>+</span>CODER
          </LogoText>
          <StyledTypography variant="h2" component="h1">
            Keep focusing in creating value
          </StyledTypography>
          <StyledTypography
            variant="h4"
            gutterBottom
            sx={{
              mt: 2,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2.125rem' },
              lineHeight: { xs: 1.3, sm: 1.4 }
            }}
          >
            <HighlightedText>Repository maintenance & coding</HighlightedText><br />
            performed by AI Agents
          </StyledTypography>
          <AnimatedTextContainer>
              <StyledTypography variant="h2" component="span">
                <AnimatedText />
              </StyledTypography>
          </AnimatedTextContainer>
          <Box mt={4} mb={4} width="100%" maxWidth="800px" sx={{ px: { xs: 1, sm: 2 } }}>
            <AnimatedElement>
              <BashDisplay />
            </AnimatedElement>
          </Box>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 'bold',
              opacity: 0.7,
              marginBottom: 2,
              color: 'white',
            }}
          >
            Yes. This website was created with +coder
          </Typography>

          <AnimatedElement delay={0.4}>
            <CTA>Start Automating</CTA>
          </AnimatedElement>
        </HeroContent>
      </HeroWrapper>
    </Section>
  );
};

export default Hero;