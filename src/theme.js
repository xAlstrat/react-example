import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import components from './components';
import spacing from './spacing';
import mixins from './mixins';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  palette,
  typography,
  spacing,
  components,
  mixins,
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1200,
    },
  },
  custom: {
    heroGradient: `linear-gradient(45deg, ${palette.primary.main} 30%, ${palette.secondary.main} 90%)`,
    sectionPadding: {
      default: '5rem 2rem',
      md: '4rem 1.5rem',
      sm: '3rem 1rem',
    },
    cardHover: {
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: `0 6px 12px ${palette.primary.main}40`,
      },
    },
    fadeInUp: {
      '@keyframes fadeInUp': {
        from: {
          opacity: 0,
          transform: 'translateY(20px)',
        },
        to: {
          opacity: 1,
          transform: 'translateY(0)',
        },
      },
      animation: 'fadeInUp 0.6s ease-out forwards',
    },
  },
});

export default responsiveFontSizes(theme);