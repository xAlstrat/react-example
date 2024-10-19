import React from 'react';
import { Box, Typography } from '@mui/material';

const TextDisplay = ({ item, fullWidth = false, showBackground = false }) => {
  return (
    <Box 
      sx={{ 
        overflow: 'hidden', 
        height: '2em', 
        position: 'relative', 
        width: fullWidth ? '100%' : 'auto',
        display: 'flex', 
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: item.color,
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
    </Box>
  );
};

export default TextDisplay;