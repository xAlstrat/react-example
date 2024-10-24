import React from 'react';
import { Typography, Grid, Card, Box } from '@mui/material';
import { styled } from '@mui/system';
import CodeIcon from '@mui/icons-material/Code';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Section from 'components/Section';
import AnimatedElement from 'components/AnimatedElement';

const FeatureCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(124, 58, 237, 0.1)',
    border: '1px solid rgba(124, 58, 237, 0.5)',
    '& .highlight': {
      width: '100%'
    }
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    fontSize: 40,
    color: '#7C3AED'
  }
}));

const KeyFeatures = () => {
  const features = [
    {
      icon: <CodeIcon />,
      title: "Smart Pattern Recognition",
      description: "Analyze and identify best practices in your codebase automatically"
    },
    {
      icon: <CloudSyncIcon />,
      title: "Real-time Sync",
      description: "Keep your repository and generated code in perfect sync"
    },
    {
      icon: <PsychologyIcon />,
      title: "AI-Driven Workflows",
      description: "Orchestrate complex tasks with intelligent planning"
    },
    {
      icon: <AutoFixHighIcon />,
      title: "Custom Agents",
      description: "Specialized agents for different development tasks"
    }
  ];

  return (
    <Section id="key-features" index={1}>
      <AnimatedElement>
        <Typography 
          variant="h2" 
          component="h2" 
          align="center" 
          sx={{ mb: 6 }}
        >
          Key Features
        </Typography>
      </AnimatedElement>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <AnimatedElement delay={index * 0.1}>
              <FeatureCard>
                <IconWrapper>
                  {feature.icon}
                  <Box 
                    className="highlight"
                    sx={{
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      height: 2,
                      width: '40%',
                      bgcolor: '#7C3AED',
                      transition: 'width 0.3s ease'
                    }}
                  />
                </IconWrapper>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </FeatureCard>
            </AnimatedElement>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default KeyFeatures;