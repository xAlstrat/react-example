import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardHeader, Button, Slider } from '@mui/material';
import Section from 'components/Section';

const tiers = [
  {
    title: 'Personal',
    price: '20',
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
    price: '30',
    description: [
      'Per developer',
      'All Personal features',
      'Standard Support',
      'Collaborative features',
    ],
    buttonText: 'Calculate price',
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
  const [teamSizeRange, setTeamSizeRange] = useState(0);
  const baseTeamPrice = 30;
  
  const teamSizeRanges = ['1-10', '11-50', '51-200', '>200'];
  const discountRates = [0, 0.1, 0.2, 0.3];

  const getTeamPrice = (range) => {
    const maxSize = range === 3 ? 200 : parseInt(teamSizeRanges[range].split('-')[1]);
    const minSize = range === 3 ? 201 : parseInt(teamSizeRanges[range].split('-')[0]);
    const avgSize = (maxSize + minSize) / 2;
    return Math.round(baseTeamPrice * avgSize * (1 - discountRates[range]));
  };

  const teamPrice = getTeamPrice(teamSizeRange);

  const handleTeamSizeChange = (event, newValue) => {
    setTeamSizeRange(newValue);
  };

  return (
    <Section id="pricing" bgColor="dark1">
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
                        ${tier.title === 'Team' ? teamPrice : tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {tier.title === 'Team' ? '/mo per dev' : (tier.title !== 'Enterprise' && '/mo')}
                      </Typography>
                    </Box>
                    {tier.title === 'Team' && (
                      <Box sx={{ mb: 2 }}>
                        <Typography id="team-size-slider" gutterBottom>
                          Team Size: {teamSizeRanges[teamSizeRange]}
                        </Typography>
                        <Slider
                          value={teamSizeRange}
                          onChange={handleTeamSizeChange}
                          aria-labelledby="team-size-slider"
                          valueLabelDisplay="auto"
                          step={1}
                          marks={teamSizeRanges.map((range, index) => ({
                            value: index,
                            label: range,
                          }))}
                          min={0}
                          max={3}
                        />
                      </Box>
                    )}
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
    </Section>
  );
};

export default Pricing;