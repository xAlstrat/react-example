import React from 'react';
import { Box, Container, Grid, Typography, Link, TextField, Button, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: theme.spacing(6, 0),
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const Newsletter = styled('form')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

const Footer = () => {
  const theme = useTheme();

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <FooterHeading variant="h6">Pluscoder</FooterHeading>
            <Typography variant="body2">Empowering developers with AI-assisted coding.</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterHeading variant="h6">Quick Links</FooterHeading>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <li><FooterLink href="/documentation">Documentation</FooterLink></li>
              <li><FooterLink href="https://github.com/pluscoder/repo" target="_blank" rel="noopener noreferrer">GitHub Repository</FooterLink></li>
              <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink href="/terms">Terms of Service</FooterLink></li>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterHeading variant="h6">Connect</FooterHeading>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <li><FooterLink href="https://twitter.com/pluscoder" target="_blank" rel="noopener noreferrer">Twitter</FooterLink></li>
              <li><FooterLink href="https://linkedin.com/company/pluscoder" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink></li>
              <li><FooterLink href="https://github.com/pluscoder" target="_blank" rel="noopener noreferrer">GitHub</FooterLink></li>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterHeading variant="h6">Newsletter</FooterHeading>
            <Newsletter onSubmit={(e) => e.preventDefault()}>
              <TextField
                size="small"
                variant="outlined"
                placeholder="Enter your email"
                required
                sx={{ backgroundColor: theme.palette.background.default }}
              />
              <Button variant="contained" type="submit">Subscribe</Button>
            </Newsletter>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Pluscoder. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;