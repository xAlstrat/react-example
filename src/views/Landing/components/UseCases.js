import React from 'react';
import { Box, Typography, useTheme, Fade, Container } from '@mui/material';
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
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import BuildIcon from '@mui/icons-material/Build';
import Grid from '@mui/material/Grid2';
import WorkflowDiagram from 'components/WorkflowDiagram';
import { Code, BugReport, Description, RateReview, Rule, Science, Update } from '@mui/icons-material';

import '@xyflow/react/dist/base.css';
const CodeAssistant = () => {
  const consoleItems = [
    { icon: <UpdateIcon />, text: "Automated file updates & context loading", color: "#0097a7" },
    { icon: <EmojiObjectsIcon />, text: "Pre-defined and custom specialized agents", color: "#388e3c" },
    { icon: <DevicesIcon />, text: "Multi-modal LLM support", color: "#f57c00" },
    { icon: <BugReportIcon />, text: "Automated test & lint command execution", color: "#d32f2f" },
    { icon: <MenuBookIcon />, text: "Custom external knowledge sources", color: "#ffeb3b" },
    { icon: <CodeIcon />, text: "Custom prompt commands", color: "#0097a7" },
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
      </Box>
      <Grid container spacing={4} justifyContent={"center"}>
        <Grid item size={6} sx={{ position: 'relative', height: '600px' }}>
          <Fade in={true} timeout={1000}>
            <Box sx={{ position: 'absolute', width: '90%', height: '100%', overflow: 'hidden' }}>
              <VSCodeSkeleton />
            </Box>
          </Fade>
          <Fade in={true} timeout={2000}>
            <Box sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '70%',
              height: '85%',
              zIndex: 1,
            }}>
              <Box sx={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}>
                <ConsoleComponent>
                  <DelayedList items={consoleItems} delay={500} />
                  <BashInputDisplay text="tell me what pluscoder can do" />
                </ConsoleComponent>
              </Box>
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </>
  );
};

const CloudUseCaseSection = () => {
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
    <>
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
        </Box>
        <Grid container spacing={4} justifyContent={"center"}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box sx={{ height: 500 }}><WorkflowDiagram /></Box>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <DelayedList
              items={taskItems}
              itemDelay={500}
              startDelay={250}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const UseCaseSection = ({ title, description, icon, items }) => {
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
          {title}
        </Typography>
        <Typography variant="h6">
          {description}
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent={"center"}>
        <Grid item size={6} sx={{ position: 'relative', height: '600px' }}>
          placeholder
        </Grid>
      </Grid>
    </>
  );
};

const UseCases = () => {
  const theme = useTheme();

  const useCases = [
    {
      title: "Cloud-based Asynchronous Coding",
      description: "Leave Pluscoder working in the cloud, asynchronously performing coding or code maintenance tasks.",
      icon: <CloudQueueIcon fontSize="large" />,
      items: [
        "Automatically create pull requests from issues",
        "Perform mass updates based on given guidelines",
        "Conduct code reviews and suggest improvements",
        "Refactor code across multiple repositories",
        "Generate and update documentation",
      ],
    },
    {
      title: "Multi-purpose Development Agent",
      description: "Utilize Pluscoder as an agent to help with tasks like planning, roadmap creation, brainstorming, and issue management.",
      icon: <BuildIcon fontSize="large" />,
      items: [
        "Create project roadmaps and sprint plans",
        "Analyze and prioritize backlog items",
        "Generate user stories from requirements",
        "Conduct code complexity analysis",
        "Assist in technical debt identification and resolution",
      ],
    }
  ];

  return (
    <Section id="use-cases" index={3} bgColor="dark1">
      <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: theme.palette.common.white }}>
        AI for <HighlightedText>everybody</HighlightedText> and <HighlightedText>everywhere</HighlightedText>
      </Typography>
      <CodeAssistant />
      <CloudUseCaseSection />
    </Section>
  );
};

export default UseCases;