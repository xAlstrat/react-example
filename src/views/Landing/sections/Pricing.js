import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, styled, Tabs as MuiTabs, Tab as MuiTab, useTheme } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import WindowIcon from '@mui/icons-material/Window';
import AppleIcon from '@mui/icons-material/Apple';
import LinuxIcon from '@mui/icons-material/Android';
import Section from 'components/Section';
import HighlightedText from 'components/HighlightedText';

const StyledTabs = styled(MuiTabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .MuiTabs-flexContainer': {
    display: 'inline-flex',
    borderRadius: '30px',
    padding: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
}));

const StyledTab = styled(MuiTab)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: '8px 24px',
  borderRadius: '24px',
  '&.Mui-selected': {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
  '&:not(:last-of-type)': {
    marginRight: theme.spacing(1),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundImage: "none",
  borderRadius: theme.shape.borderRadius,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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

const PricingCard = ({ tier, isPopular }) => (
  <StyledCard elevation={isPopular ? 8 : 1}>
    <StyledCardContent>
      <Box>
        <Typography variant="h5" component="h2" gutterBottom color="primary.main">
          {tier.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {tier.subtitle}
        </Typography>
        <PriceTypography>
          {tier.price === 'Free' ? tier.price : `$${tier.price}`}
          {tier.period && (
            <Typography variant="h6" component="span" color="text.secondary">
              {tier.period}
            </Typography>
          )}
        </PriceTypography>
        {tier.originalPrice && (
          <Typography variant="body2" color="success.main" paragraph>
            (Early Bird)
          </Typography>
        )}
        <FeatureList>
          {tier.features.map((feature, index) => (
            <Feature key={index}>
              <CheckIcon color="success" style={{ marginRight: 8 }} />
              <Typography variant="body2">{feature}</Typography>
            </Feature>
          ))}
        </FeatureList>
      </Box>
      <Box>
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
            {tier.buttonText || 'Get Started'}
          </Button>
        )}
      </Box>
      {tier.version && (
        <Typography variant="caption" color="text.secondary" align="center" style={{ marginTop: 16 }}>
          {tier.version}
        </Typography>
      )}
    </StyledCardContent>
  </StyledCard>
);

const standardTiers = [
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
      'Automated file updates and context loading',
      'Custom context sources',
      'Pre-defined and custom specialized agents',
      'Multi-modal LLM support',
      'Tests/Lint feedback based solutions',
      'Custom prompt commands',
      'Task based executions',
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

const enterpriseTiers = [
  {
    title: 'Enterprise',
    subtitle: 'Customized solutions for large-scale implementations',
    price: 'Custom',
    features: [
      'Dedicated account manager',
      'Custom AI model training',
      'Advanced security features',
      'API access and integration support',
      'Unlimited PearAI Credits',
      'On-premise deployment options',
    ],
    buttonText: 'Contact Sales',
  },
];

const Pricing = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const currentTiers = selectedTab === 0 ? standardTiers : enterpriseTiers;

  return (
    <Section id="pricing" bgColor="dark1">
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h2" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold', 
              mb: 6, 
              color: theme.palette.common.white 
            }}
          >
            Develop <HighlightedText>10x</HighlightedText> faster just now
          </Typography>
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
            <StyledTabs value={selectedTab} onChange={handleTabChange}>
              <StyledTab label="Standard" />
              <StyledTab label="Enterprise" />
            </StyledTabs>
          </Box>
          <Grid container spacing={4} alignItems="stretch" justifyContent="center">
            {currentTiers.map((tier, index) => (
              <Grid item key={tier.title} xs={12} sm={6} md={selectedTab === 0 ? 4 : 6}>
                <PricingCard tier={tier} isPopular={selectedTab === 0 ? index === 1 : true} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Section>
  );
};

export default Pricing;