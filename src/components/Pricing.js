import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardHeader, Button } from '@mui/material';

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

const Pricing = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" color="text.primary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Choose the plan that fits your needs
        </Typography>
        <Grid container spacing={4} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  sx={{ backgroundColor: (theme) => theme.palette.grey[200] }}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2 }}>
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;