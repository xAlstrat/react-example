import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const SlidingTextDisplay = ({ items, interval = 3000, fullWidth = false, showBackground = false, loop = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState('auto');
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (loop) {
          return (prevIndex + 1) % items.length;
        } else {
          return prevIndex < items.length - 1 ? prevIndex + 1 : prevIndex;
        }
      });
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval, loop]);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        if (fullWidth) {
          setContainerWidth('100%');
        } else {
          const maxWidth = Math.max(...items.map(item => {
            const tempSpan = document.createElement('span');
            tempSpan.style.visibility = 'hidden';
            tempSpan.style.position = 'absolute';
            tempSpan.style.whiteSpace = 'nowrap';
            tempSpan.innerHTML = `<span>${item.icon}</span><span>${item.text}</span>`;
            document.body.appendChild(tempSpan);
            const width = tempSpan.offsetWidth;
            document.body.removeChild(tempSpan);
            return width;
          }));
          setContainerWidth(maxWidth + 20); // Add some padding
        }
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [items, fullWidth]);

  return (
    <Box 
      ref={containerRef} 
      sx={{ 
        overflow: 'hidden', 
        height: '2em', 
        position: 'relative', 
        width: containerWidth,
        ...(fullWidth && { display: 'flex', justifyContent: 'flex-start' })
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            left: fullWidth ? 'auto' : 0,
            right: fullWidth ? 'auto' : 0,
            color: item.color,
            animation: index === activeIndex
              ? `${slideUp} 0.5s ease-in-out forwards`
              : index === (activeIndex - 1 + items.length) % items.length
              ? `${slideDown} 0.5s ease-in-out forwards`
              : 'none',
            opacity: index === activeIndex ? 1 : 0,
            whiteSpace: 'nowrap',
            ...(showBackground && {
              backgroundColor: `${item.color}33`, // 33 is 20% opacity in hex
              borderRadius: '4px',
              padding: '4px 12px',
            }),
          }}
        >
          {item.icon}
          <Typography variant="body1" sx={{ ml: 1 }}>
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SlidingTextDisplay;