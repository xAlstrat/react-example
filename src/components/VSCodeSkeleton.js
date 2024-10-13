import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import FolderIcon from '@mui/icons-material/Folder';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';

const VSCodeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1e1e1e',
  color: '#d4d4d4',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
}));

const Sidebar = styled(Box)(({ theme }) => ({
  backgroundColor: '#252526',
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const FileTree = styled(Box)(({ theme }) => ({
  backgroundColor: '#252526',
  padding: theme.spacing(1),
}));

const TabsArea = styled(Box)(({ theme }) => ({
  backgroundColor: '#2d2d2d',
  display: 'flex',
  borderBottom: '1px solid #252526',
}));

const Tab = styled(Box)(({ theme, active }) => ({
  padding: theme.spacing(1, 2),
  backgroundColor: active ? '#1e1e1e' : 'transparent',
  borderRight: '1px solid #252526',
  cursor: 'pointer',
}));

const CodeArea = styled(Box)(({ theme }) => ({
  backgroundColor: '#1e1e1e',
  padding: theme.spacing(1),
}));

const Console = styled(Box)(({ theme }) => ({
  backgroundColor: '#1e1e1e',
  borderTop: '1px solid #333333',
  padding: theme.spacing(1),
}));

const StaticLine = styled(Box)(({ theme, width }) => ({
  backgroundColor: '#333333',
  height: '14px',
  width: width,
  marginBottom: theme.spacing(1),
}));

const VSCodeSkeleton = () => {
  return (
    <VSCodeContainer>
      <Grid container>
        <Grid item xs={1}>
          <Sidebar>
            <FolderIcon />
            <SearchIcon />
            <CodeIcon />
            <TerminalIcon />
            <SettingsIcon />
          </Sidebar>
        </Grid>
        <Grid item xs={3}>
          <FileTree>
            <Typography variant="body2" gutterBottom>Explorer</Typography>
            <StaticLine width="80%" />
            <StaticLine width="70%" />
            <StaticLine width="75%" />
            <StaticLine width="60%" />
          </FileTree>
        </Grid>
        <Grid item xs={8}>
          <TabsArea>
            <Tab active>
              <Typography variant="body2">index.js</Typography>
            </Tab>
            <Tab>
              <Typography variant="body2">App.js</Typography>
            </Tab>
          </TabsArea>
          <CodeArea>
            <StaticLine width="100%" />
            <StaticLine width="90%" />
            <StaticLine width="95%" />
            <StaticLine width="85%" />
            <StaticLine width="100%" />
            <StaticLine width="80%" />
          </CodeArea>
          <Console>
            <Typography variant="body2" gutterBottom>Console</Typography>
            <StaticLine width="100%" />
            <StaticLine width="90%" />
          </Console>
        </Grid>
      </Grid>
    </VSCodeContainer>
  );
};

export default VSCodeSkeleton;