import React from 'react';
import { Box, Chip, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SecurityIcon from '@mui/icons-material/Security';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import SettingsIcon from '@mui/icons-material/Settings';
import SyncIcon from '@mui/icons-material/Sync';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const CloudFeatureDisplay = () => {
  const features = [
    { icon: <AutoFixHighIcon />, label: 'Automated Tasks', tooltip: 'Execute code tasks automatically' },
    { icon: <SecurityIcon />, label: 'Secure Execution', tooltip: 'On-premises operation, your code stays secure' },
    { icon: <AccountTreeIcon />, label: 'Multi-Repo Support', tooltip: 'Work across multiple repositories' },
  ];

  const cloudIcons = [
    { icon: CloudIcon, color: 'primary.main' },
    { icon: StorageIcon, color: 'secondary.main' },
    { icon: CodeIcon, color: 'error.main' },
    { icon: SettingsIcon, color: 'warning.main' },
    { icon: SyncIcon, color: 'info.main' },
  ];

  const listItems = [
    "Automatically create pull requests from issues",
    "Perform mass updates based on given guidelines",
    "Conduct code reviews and suggest improvements",
    "Refactor code across multiple repositories",
    "Generate and update documentation",
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        maxWidth: 600,
        margin: '0 auto',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {cloudIcons.map((IconComponent, index) => (
          <Grid item key={index}>
            <IconComponent.icon
              sx={{
                fontSize: 48,
                color: IconComponent.color,
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {features.map((feature, index) => (
          <Chip
            key={index}
            icon={feature.icon}
            label={feature.label}
            title={feature.tooltip}
            sx={{
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              '& .MuiChip-icon': {
                color: 'inherit',
              },
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          />
        ))}
      </Box>

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {listItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CloudFeatureDisplay;