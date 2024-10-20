import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardHeader, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const tiers = [
  {
    title: 'Basic',
    price: '19',
    description: ['5 repositories', 'Basic code maintenance', 'Standard support'],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '49',
    description: [
      '20 repositories',
      'Advanced code maintenance',
      'Custom agents',
      'Priority support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    description: [
      'Unlimited repositories',
      'Full suite of features',
      'Dedicated support',
      'Custom integrations',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const DarkCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.custom.darkPricing.headerBackground,
  color: theme.custom.darkPricing.textPrimary,
  border: `1px solid ${theme.custom.darkPricing.textSecondary}`,
  '& .MuiCardHeader-root': {
    backgroundColor: theme.custom.darkPricing.background,
  },
  '& .MuiCardHeader-title': {
    color: theme.custom.darkPricing.textPrimary,
    fontWeight: 'bold',
  },
  '& .MuiCardHeader-subheader': {
    color: theme.palette.primary.main,
  },
  '& .MuiTypography-root': {
    color: theme.custom.darkPricing.textPrimary,
  },
  '& .MuiButton-root': {
    color: theme.custom.darkPricing.textPrimary,
    borderColor: theme.palette.primary.main,
  },
  '& .MuiButton-contained': {
    backgroundColor: theme.palette.primary.main,
    color: theme.custom.darkPricing.background,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  '& .MuiButton-outlined': {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}22`,
    },
  },
}));

const Pricing = () => {
  return (
    <Box sx={{ bgcolor: 'custom.darkPricing.background', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" color="custom.darkPricing.textPrimary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="custom.darkPricing.textSecondary" paragraph>
          Choose the plan that fits your needs
        </Typography>
        <Grid container spacing={4} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={6} md={4}>
              <DarkCard>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2 }}>
                    <Typography component="h2" variant="h3">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6">
                      /mo
                    </Typography>
                  </Box>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardContent>
              </DarkCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;