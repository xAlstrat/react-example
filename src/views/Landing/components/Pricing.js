import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, styled } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import WindowIcon from '@mui/icons-material/Window';
import AppleIcon from '@mui/icons-material/Apple';
import LinuxIcon from '@mui/icons-material/Android';
import Section from 'components/Section';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(3),
}));

const PriceTypography = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
}));

const FeatureList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  marginBottom: theme.spacing(2),
}));

const Feature = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const tiers = [
  {
    title: 'Intern',
    subtitle: 'You can download PearAI directly, and use our free trial, or your own API key 😎',
    price: 'Free',
    description: 'Free requests out of the box, no credit card required.',
    features: [
      'Use our free trial, your own API key, or local models',
      'Community Discord server',
    ],
    downloadButtons: ['Windows', 'Linux x64', 'MacOS'],
    version: 'version 1.3.0\nlast release Oct 7, 2024',
  },
  {
    title: 'Junior Engineer (Monthly)',
    subtitle: "Get the monthly subscription, and we'll take care of you. 😎",
    price: '15',
    originalPrice: '18',
    period: '/month',
    description: '(Early Bird)',
    features: [
      'Monthly refill of PearAI Credits for market-leading AI models',
      'Full privacy: zero data retention policy with Anthropic',
      'Direct customer support by the founders and contributors',
      'Private Discord channel',
    ],
    buttonText: 'Get Started',
  },
  {
    title: '10x Engineer (Yearly)',
    subtitle: "Pay one lump sum yearly, and you'll be treated like our VIP! 🤩",
    price: '10',
    originalPrice: '14',
    period: '/month',
    description: '(Early Bird)',
    features: [
      'Everything from monthly',
      'Priority for new feature requests',
      'Early access to new features (e.g. o1-mini and o1-preview)',
    ],
    buttonText: 'Get Started',
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
          <Grid container spacing={4} alignItems="stretch">
            {tiers.map((tier) => (
              <Grid item key={tier.title} xs={12} sm={6} md={4}>
                <StyledCard>
                  <StyledCardContent>
                    <Box>
                      <Typography variant="h5" component="h2" gutterBottom color="primary">
                        {tier.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                        {tier.subtitle}
                      </Typography>
                      <PriceTypography>
                        {tier.price === 'Free' ? tier.price : `$${tier.price}`}
                        {tier.period && (
                          <Typography variant="h6" component="span" color="textSecondary">
                            {tier.period}
                          </Typography>
                        )}
                      </PriceTypography>
                      {tier.originalPrice && (
                        <Typography variant="body2" color="textSecondary" style={{ textDecoration: 'line-through' }}>
                          ${tier.originalPrice}{tier.period}
                        </Typography>
                      )}
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        {tier.description}
                      </Typography>
                      <FeatureList>
                        {tier.features.map((feature, index) => (
                          <Feature key={index}>
                            <CheckIcon color="primary" style={{ marginRight: 8 }} />
                            {feature}
                          </Feature>
                        ))}
                      </FeatureList>
                    </Box>
                    <Box mt="auto">
                      {tier.downloadButtons ? (
                        <Box>
                          {tier.downloadButtons.map((button, index) => (
                            <DownloadButton
                              key={index}
                              variant="outlined"
                              color="primary"
                              startIcon={
                                button === 'Windows' ? <WindowIcon /> :
                                button === 'MacOS' ? <AppleIcon /> :
                                <LinuxIcon />
                              }
                            >
                              {button}
                            </DownloadButton>
                          ))}
                        </Box>
                      ) : (
                        <Button fullWidth variant="contained" color="primary">
                          {tier.buttonText}
                        </Button>
                      )}
                    </Box>
                    {tier.version && (
                      <Typography variant="caption" color="textSecondary" align="center" style={{ marginTop: 16 }}>
                        {tier.version}
                      </Typography>
                    )}
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