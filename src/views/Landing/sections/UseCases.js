import React from 'react';
import { Box, Typography, useTheme, Container, Card, CardContent, Tabs, Tab } from '@mui/material';
import VSCodeSkeleton from 'components/VSCodeSkeleton';
import ConsoleComponent from 'components/ConsolePaper';
import SlidingTextDisplay from 'components/SlidingTextDisplay';
import HighlightedText from 'components/HighlightedText';
import BashInputDisplay from 'components/BashInputDisplay';
import Section from 'components/Section';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckIcon from '@mui/icons-material/Check';
import Grid from '@mui/material/Grid2';
import WorkflowDiagram from 'components/WorkflowDiagram';
import AnimatedElement from 'components/AnimatedElement';
import Stack from '@mui/material/Stack';
import { Code, BugReport, Description, RateReview, Rule, Science, Update, Storage, Cloud, Security } from '@mui/icons-material';
import CTA from 'components/Button/CTA';

import '@xyflow/react/dist/base.css';

const USE_CASES = [
  {
    id: 'coding',
    title: 'Conversational Development',
    description: <Typography variant="h6">Chat with specialized AI agents and ask them <HighlightedText>anything</HighlightedText> about your codebase. <br/>Features, bug fixed, brainstorming, implementation plans, implementation of guidelines, etc.</Typography>,
    activeNodes: ['1a', '1b','2'],
    inactiveNodes: ['3a', '3c', '4a', '4b'],
  },
  {
    id: 'guidelines',
    title: 'Guidelines',
    description: <Typography variant="h6">Feed our agents with <HighlightedText>specialized knowledge</HighlightedText>; guidelines, standards, documentation, etc. <br/>Agents will leverage that knowledge when working of the codebase.</Typography>,
    activeNodes: ['2', '3a'],
    inactiveNodes: ['1a', '1b', '3c', '4a', '4b'],
  },
  {
    id: 'agents',
    title: 'Specialized Agents',
    description: <Typography variant="h6">Define <HighlightedText>tailored agents</HighlightedText> that fits your needs. <br/>Place these specialist anywhere in your workflow.</Typography>,
    activeNodes: ['2', '3c'],
    inactiveNodes: ['1a', '1b', '3a', '4a', '4b'],
    steps: [
      'New developer asks about codebase',
      'AI processes guidelines and config',
      'Agent explains patterns and practices'
    ]
  },
  {
    id: 'output',
    title: 'Output',
    description: <Typography variant="h6">Subscribe to <HighlightedText>custom events</HighlightedText> and enhance your workflow. <br/>Not just coding, agents can trigger want you need at the right time.</Typography>,
    activeNodes: ['2', '4a', '4b'],
    inactiveNodes: ['1a', '1b', '3a', '3c'],
    steps: [
      'System detects code changes',
      'AI analyzes changes and context',
      'Agent creates/updates issues'
    ]
  }
];

const WorkflowDiagramSection = () => {
  const [activeUseCase, setActiveUseCase] = React.useState(0);
  const [activeNodes, setActiveNodes] = React.useState(USE_CASES[0].activeNodes);
  const [inactiveNodes, setInactiveNodes] = React.useState(USE_CASES[0].inactiveNodes);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveUseCase((prev) => (prev + 1) % USE_CASES.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const currentCase = USE_CASES[activeUseCase];
    setActiveNodes(currentCase.activeNodes);
    setInactiveNodes(currentCase.inactiveNodes);
  }, [activeUseCase]);

  return <AnimatedElement delay={0.4}>
    <Box mb={10}>
      <Stack spacing={2}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
          <Tabs 
            value={activeUseCase}
            onChange={(e, newValue) => setActiveUseCase(newValue)}
            textColor="secondary"
            indicatorColor="secondary"
            sx={{ 
              '& .MuiTab-root': { 
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-selected': { color: 'white' }
              }
            }}
          >
            {USE_CASES.map((useCase, index) => (
              <Tab key={useCase.id} label={useCase.title} />
            ))}
          </Tabs>
        </Box>
        <Box sx={{ height: 300 }}>
          <WorkflowDiagram
            activeNodeIds={activeNodes}
            inactiveNodeIds={inactiveNodes}
            onNodeClick={(_, node) => {
              if (node.id === '2' || !activeNodes.includes(node.id)) return;
              const newActiveNodes = activeNodes.filter(id => id !== node.id);
              setActiveNodes(newActiveNodes);
            }}
          />
        </Box>
        <Box sx={{textAlign: "center", p: {xs: 0, md: 6}}} >
          {USE_CASES[activeUseCase].description}
        </Box>
      </Stack>
    </Box>
  </AnimatedElement>
}

const CodeAssistant = () => {
  const [resetKey, setResetKey] = React.useState(0);

  React.useEffect(() => {
    // Calculate total time: consoleItems2 length * interval + extra delay for last message
    const totalTime = (consoleItems2.length * 2000) + 4000;

    const timer = setInterval(() => {
      setResetKey(prev => prev + 1);
    }, totalTime);

    return () => clearInterval(timer);
  }, []);

  const consoleItems = [
    { icon: <PersonIcon />, text: "You: Add this new feature...", color: "#198dff" },
  ];
  const consoleItems2 = [
    { icon: <SmartToyIcon />, text: "Let's start...", color: "#00a592" },
    { icon: <HourglassBottomIcon />, text: "Thinking...", color: "#f57c00" },
    { icon: <SmartToyIcon />, text: "1. Read context files", color: "#00a592" },
    { icon: <SmartToyIcon />, text: "2. Verify team guidelines", color: "#00a592" },
    { icon: <HourglassBottomIcon />, text: "Thinking...", color: "#f57c00" },
    { icon: <SmartToyIcon />, text: "3. Editing files...", color: "#00a592" },
    { icon: <CheckIcon />, text: "index.js, App.js updated!", color: "#388e3c" },
    { icon: <HourglassBottomIcon />, text: "Running tests...", color: "#f57c00" },
    { icon: <CheckIcon />, text: "Test passed!", color: "#388e3c" },
    { icon: <SmartToyIcon />, text: "Request completed!", color: "#00a592" },
  ];

  return (
    <Box mb={10}>
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
            Keep using your IDE as always. <strong>Just tell +coder what you want</strong> through the console.
          </Typography>
        </AnimatedElement>
      </Box>
      <Grid container spacing={4} justifyContent={"center"}>
        <Grid item size={{ xs: 12, md: 6 }} sx={{ position: 'relative', height: '350px' }}>
          <Box sx={{ position: 'absolute', width: '90%', height: '100%', overflow: 'hidden' }}>
            <AnimatedElement delay={0.4}>
              <VSCodeSkeleton />
            </AnimatedElement>
          </Box>

          <Box sx={{
            position: 'absolute',
            top: 100,
            right: 0,
            width: { xs: '100%', md: '70%' },
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
                    <Box key={`slide1-${resetKey}`}>
                      <AnimatedElement delay={0}>
                        <SlidingTextDisplay items={consoleItems} fullWidth={true} loop={false} />
                      </AnimatedElement>
                      <AnimatedElement delay={1}>
                        <SlidingTextDisplay items={consoleItems2} interval={2000} fullWidth={true} loop={false} />
                      </AnimatedElement>
                      <AnimatedElement delay={consoleItems2.length * 2}>
                        <SlidingTextDisplay items={[
                          { icon: <SmartToyIcon />, text: "Should we update docs?", color: "#00a592" }
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
        <Grid item size={{ xs: 12, md: 6 }}>
          <AnimatedElement delay={0.8}>
            <Card
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="h4"
                  align="center"
                  gutterBottom
                  sx={{
                    fontWeight: 300,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Key features
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CodeIcon />
                    <Typography variant="body2" style={{ fontWeight: 300 }}>
                      Smart pattern and code practices recognition
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Storage />
                    <Typography variant="body2" style={{ fontWeight: 300 }}>
                      Customizable knowledge sources
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Update />
                    <Typography variant="body2" style={{ fontWeight: 300 }}>
                      Real-time repository updates
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Science />
                    <Typography variant="body2" style={{ fontWeight: 300 }}>
                      Smart task planning and orchestrated agent workflows
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <SmartToyIcon />
                    <Typography variant="body2" style={{ fontWeight: 300 }}>
                      Specialized agents for different development tasks
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <EmojiObjectsIcon />
                    <Typography variant="body2" style={{ fontWeight: 300 }}>
                      Automated feedback loops
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </AnimatedElement>
        </Grid>
      </Grid >
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <AnimatedElement delay={1}>
          <CTA>Start Free Trial</CTA>
        </AnimatedElement>
      </Box>
    </Box>
  );
};

const CloudUseCaseSection = () => {
  const cloudFeatures = [
    { icon: <Storage />, text: "Customizable & centralized knowledge sources" },
    { icon: <Cloud />, text: "Runs in your own infrastructure" },
    { icon: <Security />, text: "Bring your own api keys and models" },
    { icon: <CodeIcon />, text: "Mass interaction with your code base" },
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
            Cloud-based Asynchronous Coding
          </Typography>
          <Typography variant="h6" gutterBottom>
            Leave Pluscoder working in the cloud, asynchronously performing coding or code maintenance tasks.
          </Typography>
        </AnimatedElement>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item size={{ xs: 12, md: 6 }}>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <AnimatedElement delay={0.8}>
            <Card
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="h4"
                  align="center"
                  gutterBottom
                  sx={{
                    fontWeight: 300,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Key features
                </Typography>
                <Stack spacing={2}>
                  {cloudFeatures.map((feature, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      {feature.icon}
                      <Typography variant="body2" style={{ fontWeight: 300, }}>
                        {feature.text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
            {/* <Box sx={{ mt: 2, mb: 2 }}>
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
            </Box> */}
          </AnimatedElement>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <AnimatedElement delay={1}>
          <CTA>Start Free Trial</CTA>
        </AnimatedElement>
      </Box>
    </>
  );
};

const UseCases = () => {
  const theme = useTheme();

  return (
    <Section id="use-cases" index={3} bgColor="dark1">
      <Container maxWidth="xl">
        <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: theme.palette.common.white }}>
          AI Agents <HighlightedText>everywhere</HighlightedText> in your workflow
        </Typography>
        <WorkflowDiagramSection />
        <CodeAssistant />
        <CloudUseCaseSection />
      </Container>
    </Section>
  );
};

export default UseCases;