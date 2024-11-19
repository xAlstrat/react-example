import React from 'react';
import { useTheme } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

const AnimatedText = () => {
  const theme = useTheme();
  const yellowColor = theme.palette.yellow?.main || '#FFEB3B'; // Use theme yellow or default to Material-UI yellow

  return (
    <TypeAnimation
      sequence={[
        'brainstorming',
        800,
        'development',
        800,
        'documentation',
        800,
        'standards enforcement',
        800,
        'refactoring',
        800,
        'test case generation',
        800,
        'repository analysis',
        800,
      ]}
      wrapper="span"
      speed={70}
      deletionSpeed={72}
      style={{ display: 'inline-block', color: yellowColor }}
      repeat={Infinity}
    />
  );
};

export default AnimatedText;