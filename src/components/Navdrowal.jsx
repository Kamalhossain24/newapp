import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ManuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import category from '../data/Category';

export default function Navdrowal({setCategory}) {
  const [state, setState] = React.useState({
    right: false,
  });


  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
       
          <ListItem >Category</ListItem>
      
      </List>
      <Divider />
      <List>
        {category.map((text, index) => (
          <ListItem style={{height:40,paddingLeft:"30px", borderRadius:3}} button key={text} onClick={()=>setCategory(text)}>
        
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div >
      {['left'].map((left) => (
        <React.Fragment style={{backgroundColor:'#000'}} key={left}>
          <Button onClick={toggleDrawer(left, true)}><ManuIcon /></Button>

          <ThemeProvider theme={theme}>
          <SwipeableDrawer 
            anchor={left}
            open={state[left]}
            onClose={toggleDrawer(left, false)}
            onOpen={toggleDrawer(left, true)}
          >
            {list(left)}
          </SwipeableDrawer>
          </ThemeProvider>

      
        </React.Fragment>
      ))}
    </div>
  );
}