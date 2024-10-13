import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Section from 'components/Section';

const FeaturePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: theme.palette.background.default,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const FeatureIcon = styled('div')(({ theme }) => ({
  fontSize: '3rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const KeyFeatures = () => {
  const features = [
    {
      icon: <SmartToyIcon fontSize="inherit" />,
      title: "One-Line Execution",
      description: "Fully automated operation with minimal setup, run complex tasks with a single command.",
    },
    {
      icon: <AutorenewIcon fontSize="inherit" />,
      title: "Secure On-Premises Operation",
      description: "Your code never leaves your company, ensuring maximum data security.",
    },
    {
      icon: <PsychologyIcon fontSize="inherit" />,
      title: "Custom Specialized Agents",
      description: "Tailor agents to solve specific tasks and meet your unique needs.",
    },
  ];

  return (
    <Section id="key-features" index={1}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        Key Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <FeaturePaper elevation={3}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <Typography variant="h5" component="h3" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body1">
                {feature.description}
              </Typography>
            </FeaturePaper>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default KeyFeatures;