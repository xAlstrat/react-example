import { styled } from '@mui/system';
import { darken, alpha } from '@mui/material/styles';

const HighlightedText = styled('span')(({ theme }) => {
  const baseColor = theme.palette.secondary.main;
  const darkerColor = darken(baseColor, 0.1); // Slightly darker shade
  return {
    background: `linear-gradient(135deg, ${baseColor} 0%, ${darkerColor} 100%)`,
    color: theme.palette.getContrastText(baseColor),
    padding: '0 8px',
    borderRadius: '4px',
    boxShadow: `0 1px 2px ${alpha(theme.palette.common.black, 0.1)}`,
    fontWeight: 300,
  };
});

export default HighlightedText;