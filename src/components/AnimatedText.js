import React from 'react';
import { useTheme } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

const AnimatedText = () => {
  const theme = useTheme();
  const yellowColor = theme.palette.yellow?.main || '#FFEB3B'; // Use theme yellow or default to Material-UI yellow

  return (
    <TypeAnimation
      sequence={[
        'development',
        1500,
        'documentation',
        1500,
        'security patches',
        1500,
        'standards',
        1500,
        'maintenance',
        1500
      ]}
      wrapper="span"
      speed={1}
      style={{ display: 'inline-block', color: yellowColor }}
      repeat={Infinity}
    />
  );
};

export default AnimatedText;