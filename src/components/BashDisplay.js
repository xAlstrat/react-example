import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { scroller } from 'react-scroll';

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
  fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
  fontSize: '14px',
  lineHeight: 1.5,
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const TextContainer = styled(Box)({
  flexGrow: 1,
  overflow: 'hidden',
  textAlign: 'left',
  display: 'flex',
  alignItems: 'center',
});

const CommandLine = styled('div')({
  color: '#d4d4d4',
  whiteSpace: 'nowrap',
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
  marginLeft: theme.spacing(4),
  '&:hover': {
    backgroundColor: '#444444',
  },
}));

const BashDisplay = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [displayText, setDisplayText] = useState('$ pluscoder --input \'Look m\'am im coding\' --agent my-coding-expert --yes');
  const [isTyping, setIsTyping] = useState(false);

  const animationTexts = [
    { text: 'Thinking...', color: '#FFA500' },
    { text: '> Readed files: `README.md`, `features.js`, `pricing.js`', color: '#4CAF50' },
    { text: '> Updated files: `features.js` updated' , color: '#2196F3' },
  ];

  const resetAnimation = () => {
    setAnimationStage(0);
    setDisplayText('$ pluscoder --input \'Look m\'am im coding\' --agent my-coding-expert --yes');
    setIsTyping(false);
  };

  useEffect(() => {
    if (animationStage > 0 && animationStage <= animationTexts.length) {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
      }, 750);

      const nextStageTimer = setTimeout(() => {
        if (animationStage === animationTexts.length) {
          scroller.scrollTo('key-features', {
            duration: 500,
            smooth: true,
          });
          // Reset the animation after scrolling
          setTimeout(resetAnimation, 1000);
        } else {
          setAnimationStage(animationStage + 1);
          setDisplayText(animationTexts[animationStage].text);
        }
      }, 1200);

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
        {animationStage === 0 ? (
          <CommandLine>{displayText}</CommandLine>
        ) : (
          <AnimatedText color={animationTexts[animationStage - 1].color} isTyping={isTyping}>
            {displayText}
          </AnimatedText>
        )}
      </TextContainer>
      <ReturnButton 
        variant="contained" 
        onClick={handleReturnClick} 
        disabled={animationStage !== 0}
      >
        Return ↵
      </ReturnButton>
    </ConsoleContainer>
  );
};

export default BashDisplay;