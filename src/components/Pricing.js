import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions, ToggleButton, ToggleButtonGroup, Chip } from '@mui/material';
import { styled } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#1E1E1E',
  color: '#FFFFFF',
  border: '1px solid #333333',
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

const PricingOption = ({ title, price, features, buttonText, isEarlyBird }) => (
  <StyledCard>
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom color="primary">
        {title}
      </Typography>
      <Typography variant="h4" component="div" gutterBottom>
        ${price}<Typography variant="caption" color="primary">{isEarlyBird ? ' (Early Bird)' : ''}</Typography>
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {isEarlyBird && <Typography variant="caption" color="text.secondary">${parseFloat(price) * 1.2}/month</Typography>}
      </Typography>
      {features.map((feature, index) => (
        <FeatureItem key={index}>
          <CheckIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="body2">{feature}</Typography>
        </FeatureItem>
      ))}
    </CardContent>
    <CardActions>
      <Button variant="contained" color="primary" fullWidth>
        {buttonText}
      </Button>
    </CardActions>
  </StyledCard>
);

const Pricing = () => {
  const [pricingType, setPricingType] = useState('standard');

  const handlePricingTypeChange = (event, newPricingType) => {
    if (newPricingType !== null) {
      setPricingType(newPricingType);
    }
  };

  const pricingOptions = [
    {
      title: 'Intern',
      price: 'Free',
      features: [
        'Use our free trial, your own API key, or local models',
        'Community Discord server',
      ],
      buttonText: 'Get Started',
    },
    {
      title: 'Junior Engineer (Monthly)',
      price: '15',
      features: [
        'Monthly refill of PearAI Credits for market-leading AI models',
        'Full privacy: zero data retention policy with Anthropic',
        'Direct customer support by the founders and contributors',
        'Private Discord channel',
      ],
      buttonText: 'Get Started',
      isEarlyBird: true,
    },
    {
      title: '10x Engineer (Yearly)',
      price: '10',
      features: [
        'Everything from monthly',
        'Priority for new feature requests',
        'Early access to new features (e.g. o1-mini and o1-preview)',
      ],
      buttonText: 'Get Started',
      isEarlyBird: true,
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#121212', color: '#FFFFFF' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Pricing
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <ToggleButtonGroup
          value={pricingType}
          exclusive
          onChange={handlePricingTypeChange}
          aria-label="pricing type"
        >
          <ToggleButton value="standard" aria-label="standard pricing">
            Standard
          </ToggleButton>
          <ToggleButton value="enterprise" aria-label="enterprise pricing">
            Enterprise
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Chip
          label="Be the early bird and get a discount forever"
          color="primary"
          sx={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', color: '#4CAF50', border: '1px solid #4CAF50' }}
        />
        <Typography variant="h4" color="primary" sx={{ mt: 2 }}>
          20-30% off <Typography component="span" variant="body1" color="text.secondary">(forever)</Typography>
        </Typography>
      </Box>
      <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center', gap: 4 }}>
        {pricingOptions.map((option, index) => (
          <Box key={index} sx={{ width: 300 }}>
            <PricingOption {...option} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Pricing;