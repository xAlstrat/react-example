import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import VSCodeSkeleton from '../../../components/VSCodeSkeleton';
import SlidingTextDisplay from '../../../components/SlidingTextDisplay';
import DelayedList from '../../../components/DelayedList';
import { Code, Terminal, Lightbulb, BugReport, Speed, Security } from '@mui/icons-material';

const DisplayComponents = () => {
  const slidingItems1 = [
    { icon: <Code />, text: "Write clean code", color: "#1976d2" },
    { icon: <Terminal />, text: "Efficient terminal commands", color: "#388e3c" },
    { icon: <Lightbulb />, text: "Innovative solutions", color: "#f57c00" },
  ];

  const slidingItems2 = [
    { icon: <BugReport />, text: "Identify and fix bugs quickly", color: "#d32f2f" },
    { icon: <Speed />, text: "Optimize performance", color: "#7b1fa2" },
    { icon: <Security />, text: "Enhance application security", color: "#0288d1" },
  ];

  const combinedItems = [...slidingItems1, ...slidingItems2];

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Display Components
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              VS Code Skeleton
            </Typography>
            <VSCodeSkeleton />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Sliding Text Display (Without Background)
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SlidingTextDisplay items={slidingItems1} interval={3000} fullWidth={true} />
              </Box>
              <Box sx={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SlidingTextDisplay items={slidingItems2} interval={3000} fullWidth={true} />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Sliding Text Display (With Background)
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SlidingTextDisplay items={slidingItems1} interval={3000} fullWidth={true} showBackground={true} />
              </Box>
              <Box sx={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SlidingTextDisplay items={slidingItems2} interval={3000} fullWidth={true} showBackground={true} />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Sliding Text Display (No Loop)
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SlidingTextDisplay items={slidingItems1} interval={3000} fullWidth={true} loop={false} />
              </Box>
              <Box sx={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SlidingTextDisplay items={slidingItems2} interval={3000} fullWidth={true} showBackground={true} loop={false} />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Delayed List
            </Typography>
            <DelayedList
              items={combinedItems}
              itemDelay={1000}
              startDelay={500}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DisplayComponents;