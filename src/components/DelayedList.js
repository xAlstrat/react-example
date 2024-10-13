import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Fade, Box } from '@mui/material';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0.5, 0),
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    fontFamily: 'monospace',
    fontSize: '0.9rem',
  },
}));

const DelayedList = ({ items, itemDelay, startDelay }) => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const revealItems = () => {
      let timer = startDelay;
      items.forEach((item, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
        }, timer);
        timer += itemDelay;
      });
    };

    revealItems();

    return () => {
      setVisibleItems([]);
    };
  }, [items, itemDelay, startDelay]);

  return (
    <List dense>
      {items.map((item, index) => (
        <Fade in={visibleItems.includes(index)} key={index}>
          <StyledListItem>
            <Box sx={{ display: 'flex', alignItems: 'center', color: item.color, width: '100%' }}>
              <ListItemIcon sx={{ minWidth: 'auto', marginRight: 1, color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <StyledListItemText primary={item.text} />
            </Box>
          </StyledListItem>
        </Fade>
      ))}
    </List>
  );
};

DelayedList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      text: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  itemDelay: PropTypes.number,
  startDelay: PropTypes.number,
};

DelayedList.defaultProps = {
  itemDelay: 500,
  startDelay: 0,
};

export default DelayedList;