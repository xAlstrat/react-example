import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Section from 'components/Section';
import HighlightedText from 'components/HighlightedText';

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqItems = [
    {
      question: "What is Pluscoder and how does it work?",
      answer: <>
        Pluscoder is a set of Software AI Agents that are embedded inside your development workflow that operates in 2 modes:
        <br />
        <HighlightedText>Interactive Mode</HighlightedText> works directly in your IDE as a developer companion, providing real-time assistance through chat and editor interfaces.
        <br />
        <HighlightedText>Automated Mode</HighlightedText> AI Agents run autonomously in your cloud infrastructure, executing simple or complex tasks. Perfect for handling repository-wide changes automatically across multiple codebases or event-based AI Agents executions.
      </>
    },
    {
      question: "How is Pluscoder different from CursorAI or other AI Powered code editors?",
      answer: <>
        We are not an IDE or code edition tool. We provide a way to <HighlightedText>manage and run Software AI Agents</HighlightedText>; autonomously or interactively, following company conventions or guidelines, running specialized chains of agents to generate complex repository outcomes.
        <ul>
          <li>Design and Planning Assistant - Specialized agent for project brainstorming</li>
          <li>Issue Enhancement Bot - Automated repository analysis and issue enrichment</li>
          <li>Guidelines Validator - Parallel codebase validation against company standards</li>
          <li>Onboarding Assistant - Custom agent for team standards and developer training</li>
          <li>Workflow Specialist - Complex task automation with specialized agent chains</li>
        </ul>
      </>
    },
    {
      question: "How does Pluscoder ensure code security?",
      answer: <>
        Pluscoder runs entirely within <HighlightedText>your infrastructure</HighlightedText> (local or cloud), ensuring no code ever leaves your company environment. 
        
        Supports <HighlightedText>Docker containers</HighlightedText> for isolated execution, works with your existing security protocols, and can use <HighlightedText>your private LLM models</HighlightedText> behind your firewall.
      </>
    },
    {
      question: "What are Pluscoder's enterprise features?",
      answer: <>
        Pluscoder offers <HighlightedText>centralized configuration management</HighlightedText> for company standards and <HighlightedText>custom specialized agents</HighlightedText> for specific business needs.
        
        Includes <HighlightedText>multi-repository support</HighlightedText> for large-scale operations, event-driven automation, parallel execution capabilities, and company-wide guidelines enforcement.
      </>
    },
    {
      question: "When should I use Interactive vs Automated mode?",
      answer: <>
        <HighlightedText>Interactive Mode</HighlightedText> is perfect for:
        • Active development sessions
        • Code reviews and discussions
        • Real-time problem solving
        
        <HighlightedText>Automated Mode</HighlightedText> excels at:
        • Large-scale repository updates
        • Documentation maintenance
        • Security patches deployment
        • Standards enforcement across repos
      </>
    }];

  return (
    <Section id="faq" bgColor="dark1">
      <Box sx={{}}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: 'white' }}>
            Frequently Asked Questions
          </Typography>
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                backgroundColor: 'transparent',
                color: 'white',
                boxShadow: 'none',
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
                sx={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                  '&.Mui-expanded': {
                    minHeight: 48,
                  },
                }}
              >
                <Typography variant="h5" component="h3" sx={{ fontWeight: '300', letterSpacing: '0.1em', }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant='body2' style={{fontWeight: 300}}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </Section>
  );
};

export default FAQ;