import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Section from 'components/Section';

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqItems = [
    {
      question: "What problems does Pluscoder solve?",
      answer: "Pluscoder automates code tasks, such as documenting, writing, and refactoring code, applying security patches, and more."
    },
    {
      question: "Who is Pluscoder designed for?",
      answer: "It is designed for both junior and senior developers, helping automate complex tasks across multiple repositories."
    },
    {
      question: "How does Pluscoder work?",
      answer: "Pluscoder operates as a CLI tool that uses LLM agents to apply changes based on tasks and objectives."
    }
  ];

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