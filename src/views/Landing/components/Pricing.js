import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardHeader, Button, styled } from '@mui/material';
import Section from 'components/Section';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(44, 44, 44, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.common.white,
  '& .MuiCardHeader-title': {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.palette.primary.light,
  },
  '& .MuiCardHeader-subheader': {
    color: theme.palette.secondary.light,
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  color: theme.palette.common.white,
  '& .MuiTypography-root': {
    color: 'rgba(255, 255, 255, 0.8)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  fontWeight: 'bold',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0,0,0,0.3)',
  },
}));

const tiers = [
  {
    title: 'Personal',
    price: '10',
    description: [
      'Interactive mode',
      'Automated mode',
      'Custom agents',
      'Unlimited repositories',
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Team',
    subheader: 'Most popular',
    price: '20',
    description: [
      'All Personal features',
      'Standard Support',
      'Collaborative features',
      'Up to 50 developers',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    description: [
      'All Team features',
      'Enterprise Support',
      'Custom SLAs',
      'Dedicated account manager',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const Pricing = () => {
  return (
    <Section id="pricing" bgColor="dark1">
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" color="common.white" gutterBottom>
            Pricing
          </Typography>
          <Typography variant="h5" align="center" color="grey.400" paragraph>
            Choose the plan that fits your needs
          </Typography>
          <Grid container spacing={4} alignItems="flex-end">
            {tiers.map((tier) => (
              <Grid item key={tier.title} xs={12} sm={6} md={4}>
                <StyledCard>
                  <StyledCardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                  />
                  <StyledCardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2 }}>
                      <Typography component="h2" variant="h3" color="common.white">
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="primary.light">
                        {tier.title === 'Team' ? '/mo per dev' : (tier.title !== 'Enterprise' && '/mo')}
                      </Typography>
                    </Box>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {tier.description.map((line) => (
                        <Typography component="li" variant="body1" align="center" key={line} color="common.white">
                          • {line}
                        </Typography>
                      ))}
                    </ul>
                    <StyledButton
                      fullWidth
                      variant="contained"
                      color="secondary"
                      size="large"
                    >
                      {tier.buttonText}
                    </StyledButton>
                  </StyledCardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Section>
  );
};

export default Pricing;