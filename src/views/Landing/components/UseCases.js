import React from 'react';
import { Box, Typography, useTheme, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import VSCodeSkeleton from 'components/VSCodeSkeleton';
import ConsoleComponent from 'components/ConsolePaper';
import DelayedList from 'components/DelayedList';
import HighlightedText from 'components/HighlightedText';
import BashInputDisplay from 'components/BashInputDisplay';
import Section from 'components/Section';
import UpdateIcon from '@mui/icons-material/Update';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DevicesIcon from '@mui/icons-material/Devices';
import BugReportIcon from '@mui/icons-material/BugReport';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CodeIcon from '@mui/icons-material/Code';
import Grid from '@mui/material/Grid2';
import WorkflowDiagram from 'components/WorkflowDiagram';
import SlidingTextDisplay from 'components/SlidingTextDisplay';
import AnimatedElement from 'components/AnimatedElement';
import { Code, BugReport, Description, RateReview, Rule, Science, Update, Storage, Cloud, Security } from '@mui/icons-material';

import '@xyflow/react/dist/base.css';
const CodeAssistant = () => {
  const consoleItems = [
    { icon: <UpdateIcon />, text: "Automated file updates & context loading", color: "#388e3c" },
    { icon: <EmojiObjectsIcon />, text: "Pre-defined and custom specialized agents", color: "#388e3c" },
    { icon: <DevicesIcon />, text: "Multi-modal LLM support", color: "#388e3c" },
    { icon: <BugReportIcon />, text: "Automated test & lint command execution", color: "#388e3c" },
    { icon: <MenuBookIcon />, text: "Custom external knowledge sources", color: "#388e3c" },
    { icon: <CodeIcon />, text: "Custom prompt commands", color: "#388e3c" },
  ];

  return (
    <>
      <Box
        mb={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <AnimatedElement>
          <Typography
            variant="h4"
            component="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            A code assistant for your developers
          </Typography>
          <Typography variant="h6">
            Keep using your VSCode as always. Just tell +coder what you want through the console.
          </Typography>
        </AnimatedElement>
      </Box>
      <Grid container spacing={4} justifyContent={"center"}>
        <Grid item size={6} sx={{ position: 'relative', height: '600px' }}>
          <Box sx={{ position: 'absolute', width: '90%', height: '100%', overflow: 'hidden' }}>
            <AnimatedElement delay={0.4}>
              <VSCodeSkeleton />
            </AnimatedElement>
          </Box>

          <Box sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '70%',
            height: '85%',
            zIndex: 1,
          }}>
            <AnimatedElement delay={0.8}>
              <Box sx={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}>
                <ConsoleComponent>
                  <DelayedList items={consoleItems} delay={500} />
                  <BashInputDisplay text="tell me what pluscoder can do" />
                </ConsoleComponent>
              </Box>
            </AnimatedElement>
          </Box>
        </Grid>
      </Grid >
    </>
  );
};

const CloudUseCaseSection = () => {
  const cloudFeatures = [
    { icon: <Storage />, text: "Load context from different sources" },
    { icon: <Cloud />, text: "Run in your own cloud infrastructure" },
    { icon: <Security />, text: "Use your own LLM models" },
    { icon: <CodeIcon />, text: "Platform-independent operation" },
  ];

  const taskItems = [
    { icon: <Code />, text: "Automated code refactoring", color: "#1976d2" },
    { icon: <BugReport />, text: "AI-driven bug detection", color: "#d32f2f" },
    { icon: <Description />, text: "Documentation generation", color: "#388e3c" },
    { icon: <RateReview />, text: "Code review assistance", color: "#f57c00" },
    { icon: <Rule />, text: "Standards and guidelines enforcement", color: "#7b1fa2" },
    { icon: <Science />, text: "Test case generation", color: "#0288d1" },
    { icon: <Update />, text: "Legacy code modernization", color: "#00796b" }
  ];

  return (
    <Container maxWidth="xl">
      <Box
        mb={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <AnimatedElement>
          <Typography
            variant="h4"
            component="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Cloud-based Asynchronous Coding
          </Typography>
          <Typography variant="h6" gutterBottom>
            Leave Pluscoder working in the cloud, asynchronously performing coding or code maintenance tasks.
          </Typography>
        </AnimatedElement>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item size={{ xs: 12, md: 6 }}>
          <AnimatedElement delay={0.4}>
            <Box sx={{ height: 500 }}><WorkflowDiagram /></Box>
          </AnimatedElement>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <AnimatedElement delay={0.8}>
            <Typography variant="h6" gutterBottom>
              Key Cloud Features
            </Typography>
            <List>
              {cloudFeatures.map((feature, index) => (
                <ListItem key={index}>
                  <ListItemIcon>{feature.icon}</ListItemIcon>
                  <ListItemText primary={feature.text} />
                </ListItem>
              ))}
            </List>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Common cloud use cases
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {taskItems.map((item, index) => (
                  <Box key={index} sx={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SlidingTextDisplay 
                      items={[item]} 
                      interval={3000} 
                      fullWidth={true} 
                      showBackground={true} 
                      loop={false} 
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </AnimatedElement>
        </Grid>
      </Grid>
    </Container>
  );
};

const UseCases = () => {
  const theme = useTheme();

  return (
    <Section id="use-cases" index={3} bgColor="dark1">
      <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: theme.palette.common.white }}>
        AI for <HighlightedText>everybody</HighlightedText> and <HighlightedText>everywhere</HighlightedText> at your company
      </Typography>
      <CodeAssistant />
      <CloudUseCaseSection />
    </Section>
  );
};

export default UseCases;