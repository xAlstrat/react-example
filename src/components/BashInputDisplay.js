import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #ffffff; }
`;

const ConsoleContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1e1e1e',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
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

const AnimatedText = styled('div')(({ isTyping }) => ({
  color: '#d4d4d4',
  overflow: 'hidden',
  borderRight: isTyping ? '2px solid #ffffff' : 'none',
  whiteSpace: 'nowrap',
  maxWidth: 'fit-content',
  animation: isTyping
    ? `${typing} 2s steps(40, end) forwards, ${blinkCaret} 0.4s step-end infinite`
    : 'none',
}));

const ReturnButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#333333',
  color: '#ffffff',
  whiteSpace: 'nowrap',
  minWidth: '80px',
  flexShrink: 0,
  marginLeft: theme.spacing(2),
  '&:hover': {
    backgroundColor: '#444444',
  },
  '&:disabled': {
    backgroundColor: '#222222',
    color: '#666666',
  },
}));

const BashInputDisplay = ({ text }) => {
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ConsoleContainer>
      <TextContainer>
        <AnimatedText isTyping={isTyping}>
          $ {text}
        </AnimatedText>
      </TextContainer>
      <ReturnButton variant="contained" disabled>
        Return ↵
      </ReturnButton>
    </ConsoleContainer>
  );
};

export default BashInputDisplay;