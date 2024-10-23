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
        Pluscoder is a next-generation code agent that operates in two powerful modes:
        
        <HighlightedText>Interactive Mode</HighlightedText> works directly in your IDE as a developer companion, providing real-time assistance through chat and editor interfaces.
        
        <HighlightedText>Automated Mode</HighlightedText> runs independently in your cloud infrastructure, executing complex tasks without constant supervision. Perfect for handling repository-wide changes automatically across multiple codebases.
      </>
    },
    {
      question: "How does Pluscoder's automation work?",
      answer: <>
        At its core is the <HighlightedText>Orchestrator Agent</HighlightedText> that manages and delegates tasks automatically. It uses <HighlightedText>task-based workflows</HighlightedText> to break down complex requirements, generates multiple solutions, and selects optimal outcomes.
        
        Features automated feedback loops for error handling and seamlessly integrates with your <HighlightedText>CI/CD pipeline</HighlightedText> for automated triggers.
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
      <Box sx={{ py: 8 }}>
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
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </Section>
  );
};

export default FAQ;