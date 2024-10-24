import React from 'react';
import { Box, Typography, useTheme, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import VSCodeSkeleton from 'components/VSCodeSkeleton';
import ConsoleComponent from 'components/ConsolePaper';
import SlidingTextDisplay from 'components/SlidingTextDisplay';
import HighlightedText from 'components/HighlightedText';
import BashInputDisplay from 'components/BashInputDisplay';
import Section from 'components/Section';
import UpdateIcon from '@mui/icons-material/Update';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DevicesIcon from '@mui/icons-material/Devices';
import BugReportIcon from '@mui/icons-material/BugReport';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckIcon from '@mui/icons-material/Check';
import Grid from '@mui/material/Grid2';
import WorkflowDiagram from 'components/WorkflowDiagram';
import TextDisplay from 'components/TextDisplay';
import AnimatedElement from 'components/AnimatedElement';
import Stack from '@mui/material/Stack';
import { Code, BugReport, Description, RateReview, Rule, Science, Update, Storage, Cloud, Security, Expand } from '@mui/icons-material';

import '@xyflow/react/dist/base.css';
const CodeAssistant = () => {
  const consoleItems = [
    { icon: <PersonIcon />, text: "You: Add this new feature...", color: "#198dff" },
  ];
  const consoleItems2 = [
    { icon: <SmartToyIcon />, text: "Let's start...", color: "#00a592" },
    { icon: <HourglassBottomIcon />, text: "Thinking...", color: "#f57c00" },
    { icon: <SmartToyIcon />, text: "1. Read context files", color: "#00a592" },
    { icon: <SmartToyIcon />, text: "2. Analyzed company standards", color: "#00a592" },
    { icon: <HourglassBottomIcon />, text: "Thinking...", color: "#f57c00" },
    { icon: <SmartToyIcon />, text: "3. Editing files...", color: "#00a592" },
    { icon: <CheckIcon />, text: "index.js, App.js updated!", color: "#388e3c" },
    { icon: <HourglassBottomIcon />, text: "Running tests...", color: "#f57c00" },
    { icon: <CheckIcon />, text: "Test passed!", color: "#388e3c" },
    { icon: <SmartToyIcon />, text: "Request completed!", color: "#00a592" },
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
        <Grid item size={{ xs: 12, md: 6 }} sx={{ position: 'relative', height: '600px' }}>
          <Box sx={{ position: 'absolute', width: '90%', height: '100%', overflow: 'hidden' }}>
            <AnimatedElement delay={0.4}>
              <VSCodeSkeleton />
            </AnimatedElement>
          </Box>

          <Box sx={{
            position: 'absolute',
            top: 100,
            right: 0,
            width: '70%',
            zIndex: 1,
          }}>
            <AnimatedElement delay={0.8}>
              <Box sx={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}>

                <ConsoleComponent>
                  <Stack direction="column"
                    spacing={2}
                    sx={{
                      height: '100%',
                      justifyContent: "space-between",
                      alignItems: "stretch",
                    }}>

                    <Box>
                      <AnimatedElement delay={0}>
                        <SlidingTextDisplay items={consoleItems} fullWidth={true} loop={false} />
                      </AnimatedElement>
                      <AnimatedElement delay={1}>
                        <SlidingTextDisplay items={consoleItems2} interval={2000} fullWidth={true} loop={false} />
                      </AnimatedElement>
                      <AnimatedElement delay={consoleItems2.length * 2}>
                        <SlidingTextDisplay items={[
                          { icon: <SmartToyIcon />, text: "Would you like to update docs?", color: "#00a592" }
                        ]} interval={2000} fullWidth={true} loop={false} />

                      </AnimatedElement>
                    </Box>
                    <BashInputDisplay text="pluscoder" />
                  </Stack>
                </ConsoleComponent>
              </Box>
            </AnimatedElement>
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }} >
          <AnimatedElement delay={0.8}>
            <Typography variant="h6" gutterBottom>
              Key Features
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><CodeIcon /></ListItemIcon>
                <ListItemText primary="Smart Pattern Recognition and Best Practices Analysis" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Storage /></ListItemIcon>
                <ListItemText primary="Flexible Integration with External Knowledge Sources" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Update /></ListItemIcon>
                <ListItemText primary="Real-time Repository Synchronization and Code Generation" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Science /></ListItemIcon>
                <ListItemText primary="Intelligent Task Planning with Orchestrated Agent Workflows" />
              </ListItem>
              <ListItem>
                <ListItemIcon><SmartToyIcon /></ListItemIcon>
                <ListItemText primary="Specialized Agents for Different Development Tasks" />
              </ListItem>
              <ListItem>
                <ListItemIcon><EmojiObjectsIcon /></ListItemIcon>
                <ListItemText primary="Continuous Learning through Automated Feedback Loops" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Expand /></ListItemIcon>
                <ListItemText primary="And many more capabilities..." />
              </ListItem>
            </List>
          </AnimatedElement>
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
    { icon: <Code />, text: "Automated code refactoring", color: "#198dff" },
    { icon: <BugReport />, text: "AI-driven bug detection", color: "#d32f2f" },
    { icon: <Description />, text: "Documentation generation", color: "#388e3c" },
    { icon: <RateReview />, text: "Code review assistance", color: "#f57c00" },
    { icon: <Rule />, text: "Standards and guidelines enforcement", color: "#7b1fa2" },
    { icon: <Science />, text: "Test case generation", color: "#198dff" },
    { icon: <Update />, text: "Legacy code modernization", color: "#00a592" }
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
            <Box sx={{ mt: 2, mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Common cloud use cases
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {taskItems.map((item, index) => (
                  <Grid item size="auto" key={index}>
                    <TextDisplay
                      item={item}
                      fullWidth={false}
                      showBackground={true}
                    />
                  </Grid>
                ))}
              </Grid>
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
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: theme.palette.common.white }}>
          AI Agents <HighlightedText>everywhere</HighlightedText> at your company
        </Typography>
        <CodeAssistant />
        <CloudUseCaseSection />
      </Container>
    </Section>
  );
};

export default UseCases;