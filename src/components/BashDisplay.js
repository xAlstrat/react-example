import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { scroller } from 'react-scroll';
import SlidingTextDisplay from "components/SlidingTextDisplay"

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #ffffff; }
`;

const loadingChars = keyframes`
  0% { content: '|' }
  25% { content: '/' }
  50% { content: '-' }
  75% { content: '\\' }
  100% { content: '|' }
`;

const ConsoleContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1e1e1e',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  margin: theme.spacing(0, 2),
  fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
  fontSize: '14px',
  lineHeight: 1.5,
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
    margin: theme.spacing(0, 1),
  }
}));

const TextContainer = styled(Box)({
  flexGrow: 1,
  overflow: 'hidden',
  textAlign: 'left',
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'center',
});

const AnimatedText = styled('div')(({ color, isTyping }) => ({
  color: color || '#d4d4d4',
  overflow: 'hidden',
  borderRight: isTyping ? '2px solid #ffffff' : 'none',
  whiteSpace: 'nowrap',
  maxWidth: 'fit-content',
  animation: isTyping
    ? `${typing} 0.75s steps(40, end) forwards, ${blinkCaret} 0.4s step-end infinite`
    : 'none',
  '&::after': {
    content: '""',
    animation: `${loadingChars} 0.4s steps(4) infinite`,
    marginLeft: '0.2em',
    display: 'inline-block',
    width: '1ch',
    textAlign: 'center',
  },
}));

const ReturnButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#333333',
  color: '#ffffff',
  whiteSpace: 'nowrap',
  minWidth: '80px',
  flexShrink: 0,
  marginLeft: theme.spacing(2),
  padding: theme.spacing(1, 2),
  '&:hover': {
    backgroundColor: '#444444',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '36px',
    marginLeft: theme.spacing(1),
    padding: theme.spacing(0.5, 1),
    display: 'none',
    '& .buttonText': {
      display: 'none'
    }
  }
}));

const BashDisplay = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [displayText, setDisplayText] = useState('$ pluscoder --input "Look m\'am im coding"');
  const [isTyping, setIsTyping] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const animationTexts = [
    { text: 'Thinking...', color: '#FFA500' },
    { text: '> Readed files: `README.md`, `features.js`, `pricing.js`', color: '#4CAF50' },
    { text: '> Updated files: `features.js` updated' , color: '#2196F3' },
  ];

  const resetAnimation = () => {
    setAnimationStage(0);
    setDisplayText('$ pluscoder --input \'Look m\'am im coding\' --agent my-coding-expert');
    setIsTyping(false);
  };

  useEffect(() => {
    if (animationStage > 0 && animationStage <= animationTexts.length) {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
      }, 500);

      const nextStageTimer = setTimeout(() => {
        if (animationStage === animationTexts.length) {
          scroller.scrollTo('use-cases', {
            duration: 500,
            smooth: true,
          });
          // Reset the animation after scrolling
          setTimeout(resetAnimation, 1000);
        } else {
          setAnimationStage(animationStage + 1);
          setDisplayText(animationTexts[animationStage].text);
        }
      }, 800);

      return () => {
        clearTimeout(typingTimer);
        clearTimeout(nextStageTimer);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationStage]);

  const handleReturnClick = () => {
    setAnimationStage(1);
    setDisplayText(animationTexts[0].text);
    setIsTyping(true);
  };

  return (
    <ConsoleContainer>
      <TextContainer>
        
        <Typography style={{whiteSpace: 'nowrap', color: '#4CAF50', position: "absolute", left: 25}}>{isMobile ? '$pluscoder' : '$ pluscoder'}</Typography>
        {animationStage === 0 ? (
          <SlidingTextDisplay minHeight={isMobile? '3.2em' : '2em'}  items={[
            { text: '--input \'add an API endpoint to subscribe users\'', color: "#4CAF50" },
            { text: '--agent my-company-expert', color: "#4CAF50" },
            { text: '--task_list my_instructions.json', color: "#4CAF50" },
            { text: '--source COMPANY_GUIDELINES.md', color: "#4CAF50" },
          ]} interval={3000} fullWidth={true} loop={true} whitePrefixSize={18} />
        ) : (
          <AnimatedText color={animationTexts[animationStage - 1].color} isTyping={isTyping}>
            {displayText}
          </AnimatedText>
        )}
      </TextContainer>
      <ReturnButton 
        variant="contained" 
        onClick={handleReturnClick} 
        disabled={true}
      >
        <span className="buttonText">Return</span> ↵
      </ReturnButton>
    </ConsoleContainer>
  );
};

export default BashDisplay;