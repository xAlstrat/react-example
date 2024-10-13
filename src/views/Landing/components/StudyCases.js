import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const StudyCasesSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 2),
  background: theme.palette.background.paper,
}));

const StudyCaseCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: '0 auto',
  marginTop: theme.spacing(4),
}));

const StudyCases = () => {
  return (
    <StudyCasesSection>
      <Typography variant="h2" align="center" gutterBottom>
        Study Cases
      </Typography>
      <StudyCaseCard>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            From Zero to E-commerce Hero with Pluscoder
          </Typography>
          <Typography variant="body1" paragraph>
            Meet John, a passionate entrepreneur with a great idea for an online store but limited coding experience. With Pluscoder by his side, John embarked on an incredible journey to build his dream e-commerce platform.
          </Typography>
          <Typography variant="body1" paragraph>
            Using Pluscoder&apos;s AI-powered assistance, John was able to:
          </Typography>
          <ul>
            <li>Design and implement a responsive user interface</li>
            <li>Set up a secure payment gateway integration</li>
            <li>Create a robust product management system</li>
            <li>Implement user authentication and account management</li>
            <li>Optimize the site for search engines and performance</li>
          </ul>
          <Typography variant="body1">
            In just two months, John launched his fully functional e-commerce site, saving time and resources he would have spent hiring a development team. Thanks to Pluscoder, John&apos;s business is now thriving, with sales growing month over month.
          </Typography>
        </CardContent>
      </StudyCaseCard>
    </StudyCasesSection>
  );
};

export default StudyCases;