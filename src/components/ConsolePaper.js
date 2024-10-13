import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const ConsolePaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#2D2D2D',
  color: '#ffffff',
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  fontFamily: 'monospace',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
}));

const ConsoleHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1, 1, 1, 2),
  backgroundColor: '#3A3A3A',
  borderTopLeftRadius: theme.spacing(1),
  borderTopRightRadius: theme.spacing(1),
}));

const ConsoleButton = styled(Box)(({ theme }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  marginRight: theme.spacing(1),
}));

const ConsoleContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '330px',
  overflowY: 'auto',
}));

const ConsoleComponent = ({ children }) => (
  <ConsolePaper elevation={3}>
    <ConsoleHeader>
      <Box display="flex">
        <ConsoleButton sx={{ backgroundColor: '#ff5f56' }} />
        <ConsoleButton sx={{ backgroundColor: '#ffbd2e' }} />
        <ConsoleButton sx={{ backgroundColor: '#27c93f' }} />
      </Box>
      <Typography variant="body2" sx={{ color: '#CCCCCC' }}>bash</Typography>
    </ConsoleHeader>
    <ConsoleContent>{children}</ConsoleContent>
  </ConsolePaper>
);

export default ConsoleComponent;