import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, styled, ToggleButtonGroup, ToggleButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Section from 'components/Section';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(44, 44, 44, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: theme.spacing(2),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  color: theme.palette.common.white,
  '& .MuiTypography-root': {
    color: 'rgba(255, 255, 255, 0.8)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  fontWeight: 'bold',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  display: 'inline-flex',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  '& .MuiToggleButton-root': {
    color: theme.palette.common.white,
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
}));

const tiers = [
  {
    title: 'Intern',
    price: 'Free',
    description: [
      'Use our free trial, your own API key, or local models',
      'Community Discord server',
    ],
    buttonText: 'Windows',
    buttonVariant: 'outlined',
    version: 'version 1.3.0',
    lastRelease: 'last release Oct 7, 2024',
  },
  {
    title: 'Junior Engineer (Monthly)',
    price: '15',
    oldPrice: '18',
    period: '/month',
    description: [
      'Monthly refill of PearAI Credits for market-leading AI models',
      'Full privacy: zero data retention policy with Anthropic',
      'Direct customer support by the founders and contributors',
      'Private Discord channel',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'contained',
  },
  {
    title: '10x Engineer (Yearly)',
    price: '10',
    oldPrice: '14',
    period: '/month',
    description: [
      'Everything from monthly',
      'Priority for new feature requests',
      'Early access to new features (e.g. o1-mini and o1-preview)',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'contained',
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('Standard');

  const handlePlanChange = (event, newPlan) => {
    if (newPlan !== null) {
      setSelectedPlan(newPlan);
    }
  };

  return (
    <Section id="pricing" bgColor="dark1">
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" color="common.white" gutterBottom>
            Pricing
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <StyledToggleButtonGroup
              value={selectedPlan}
              exclusive
              onChange={handlePlanChange}
              aria-label="pricing plan"
            >
              <ToggleButton value="Standard" aria-label="standard plan">
                Standard
              </ToggleButton>
              <ToggleButton value="Enterprise" aria-label="enterprise plan">
                Enterprise
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Box>
          <Grid container spacing={4} alignItems="stretch">
            {tiers.map((tier) => (
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Intern' ? 12 : 6} md={4}>
                <StyledCard>
                  <StyledCardContent>
                    <Box>
                      <Typography variant="h4" component="h2" gutterBottom>
                        {tier.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
                        <Typography component="h3" variant="h3" color="common.white">
                          {tier.price === 'Free' ? 'Free' : `$${tier.price}`}
                        </Typography>
                        {tier.period && (
                          <Typography variant="h6" color="primary.light" sx={{ ml: 1 }}>
                            {tier.period}
                          </Typography>
                        )}
                      </Box>
                      {tier.oldPrice && (
                        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through', mb: 2 }}>
                          ${tier.oldPrice}{tier.period}
                        </Typography>
                      )}
                      <Box sx={{ mt: 2 }}>
                        {tier.description.map((line) => (
                          <Box key={line} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <CheckIcon sx={{ mr: 1, color: 'primary.main' }} />
                            <Typography variant="body1">{line}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box sx={{ mt: 'auto' }}>
                      {tier.title === 'Intern' ? (
                        <>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <StyledButton fullWidth variant="outlined">
                                Windows
                              </StyledButton>
                            </Grid>
                            <Grid item xs={6}>
                              <StyledButton fullWidth variant="outlined">
                                Linux x64
                              </StyledButton>
                            </Grid>
                          </Grid>
                          <StyledButton fullWidth variant="outlined" sx={{ mt: 2 }}>
                            MacOS
                          </StyledButton>
                          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                            {tier.version}
                          </Typography>
                          <Typography variant="body2" align="center">
                            {tier.lastRelease}
                          </Typography>
                        </>
                      ) : (
                        <StyledButton
                          fullWidth
                          variant={tier.buttonVariant}
                        >
                          {tier.buttonText}
                        </StyledButton>
                      )}
                    </Box>
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