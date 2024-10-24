import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Box } from '@mui/material';

const AnimatedElement = ({ children, delay = 0, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      sx={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
        ...(inView && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
      {...props}
    >
      {inView && children}
    </Box>
  );
};

export default AnimatedElement;