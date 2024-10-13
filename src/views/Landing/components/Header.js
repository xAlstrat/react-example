import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import Logo from '../../../components/Logo';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: 'none',
  transition: 'background-color 0.3s ease',
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(2),
}));

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Home', to: 'hero' },
    { label: 'Features', to: 'key-features' },
    { label: 'How It Works', to: 'how-it-works' },
    { label: 'Use Cases', to: 'use-cases' },
  ];

  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <Logo />
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
              <List>
                {menuItems.map((item) => (
                  <ListItem button key={item.label} component={Link} to={item.to} smooth={true} duration={500} onClick={toggleMenu}>
                    <ListItemText primary={item.label} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <nav>
            {menuItems.map((item) => (
              <NavButton key={item.label} component={Link} to={item.to} smooth={true} duration={500}>
                {item.label}
              </NavButton>
            ))}
          </nav>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;