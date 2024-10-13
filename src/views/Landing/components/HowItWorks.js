import React from 'react';
import { Typography, Box, Stepper, Step, StepLabel, StepContent, Paper } from '@mui/material';
import { styled } from '@mui/system';
import Section from 'components/Section';
import CloudFeatureDisplay from 'components/CloudFeatureDisplay';

const StyledStepper = styled(Stepper)(({ theme }) => ({
  '& .MuiStepLabel-root .Mui-completed': {
    color: theme.palette.secondary.main,
  },
  '& .MuiStepLabel-label': {
    color: theme.palette.text.primary,
  },
}));

const HowItWorks = () => {
  const steps = [
    { label: "Install Pluscoder", description: "Set up Pluscoder using Python or Docker" },
    { label: "Define Your Tasks", description: "Create a list of requirements or tasks for your project" },
    { label: "Run the CLI", description: "Execute Pluscoder with a single command line instruction" },
    { label: "AI Agents at Work", description: "LLM agents analyze and apply changes to your repository" },
    { label: "Review and Iterate", description: "Check the results and refine your tasks as needed" }
  ];

  return (
    <Section id="how-it-works" index={2}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        How Pluscoder Works
      </Typography>
      <Box maxWidth="800px" margin="0 auto">
        <StyledStepper orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label} active={true}>
              <StepLabel>
                <Typography variant="h6">{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
              </StepContent>
            </Step>
          ))}
        </StyledStepper>
        <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Cloud-based Asynchronous Coding
          </Typography>
          <Typography paragraph>
            Leave Pluscoder working in the cloud, asynchronously performing coding or code maintenance tasks.
          </Typography>
          <CloudFeatureDisplay />
        </Paper>
      </Box>
    </Section>
  );
};

export default HowItWorks;