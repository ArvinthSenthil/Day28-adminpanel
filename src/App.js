import * as React from 'react';
import "./App.css";
import "./style.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import {Dashboard } from "./Dashboard"
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {BasicTable} from "./table";
import {OutlinedCard} from "./Button"
import{Cards} from "./Cards"
import {Color} from "./color";
import {Border} from "./borders"
import {Login} from "./login"
import {Error} from "./404error"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import Chart from "./chart";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const history = useHistory();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
    const [opentwo, setOpentwo] = React.useState(false);
  
    const handleClicktwo = () => {
      setOpentwo(!opentwo);
    };
    const [openthree, setOpenthree] = React.useState(false);
  
    const handleClickthree = () => {
      setOpenthree(!openthree);
    };
  const drawer = (
    <div className="sidebar">
      <Toolbar  />
   
    <List  className="title">
    < EmojiEmotionsIcon/>
      SB ADMIN
      </List>
      <Divider />
      <List>
            <Button
             className="btn"
              size="large"
              color="inherit"
              aria-label="dashboard"
              startIcon={<HomeIcon />}
              onClick={() => history.push("/")}
            >
              Dashboard
            </Button>
      </List>
      <Divider />
      <List>
          Interface <br/>
          <List>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Components" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
     
      <Collapse className="custombtns"  in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListSubheader component="div" id="nested-list-subheader">
          Custom components
        </ListSubheader>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText  onClick={() => history.push("/buttons")} className="buttons"   primary="Buttons" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText onClick={() => history.push("/cards")} className="buttons"   primary="Cards" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    <List>
    <ListItemButton onClick={handleClicktwo}>
      <ListItemIcon>
      <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Utilities" />
      {opentwo ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    
   
    <Collapse className="custombtns"  in={opentwo} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
      <ListSubheader component="div" id="nested-list-subheader">
        Custom utilities
      </ListSubheader>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText className="buttons" onClick={() => history.push("/colors")}   primary="Colors" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText className="buttons" onClick={() => history.push("/borders")}   primary="Borders" />
        </ListItemButton>
     
      </List>
    </Collapse>
  </List>
      </List>
      <Divider />
      <List>
      <List>
    <ListItemButton onClick={handleClickthree}>
      <ListItemIcon>
      <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Pages" />
      {openthree ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    
   
    <Collapse className="custombtns"  in={openthree} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
      <ListSubheader component="div" id="nested-list-subheader">
        Login screens
      </ListSubheader>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText className="buttons" onClick={() => history.push("/login")}   primary="Login" />
        </ListItemButton>
        <ListSubheader component="div" id="nested-list-subheader">
        Other pages
      </ListSubheader>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText className="buttons" onClick={() => history.push("/404")}   primary="404 page" />
        </ListItemButton>
     
      </List>
    </Collapse>
  </List>
            <Button
            className="btn"
              size="large"
              color="inherit"
              aria-label="charts"
              startIcon={<BarChartIcon/>}
              onClick={() => history.push("/charts")}
            >
              Charts
            </Button>
            <Button
            className="btn"
              size="large"
              color="inherit"
              aria-label="tables"
              startIcon={<HomeIcon />}
              onClick={() => history.push("/tables")}
            >
              Tables
            </Button>
           
  
      </List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
   
    <Box sx={{ display: 'flex' }}>
      
      <CssBaseline />
      <AppBar
        position="fixed"
       
      >
        <Toolbar className='tabcolor'>
        <input className="searchbutton" type="search" placeholder="search for..."></input><SearchIcon id="SearchIcon"/>
   <div className="navnotification">  
<Button variant="text">
<Badge badgeContent={4} color="primary">
  <NotificationAddIcon />
  </Badge>
  </Button>
  <Button variant="text">
<Badge badgeContent={4} color="primary">
  <MailIcon color="action" />
</Badge>
</Button>
<IconButton className="IconButton">
<p className="name">Arvinth.S</p>
<Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" />
      </Stack>
</IconButton>
</div> 
        </Toolbar>
      </AppBar>
      
        <Toolbar />
        <Divider />
        
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
         
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
        
          
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
        
        >
          {drawer}
        </Drawer>
      </Box>
      <Switch>
    <Route exact path="/">
   <Dashboard/>
   
       </Route>
       <Route exact path="/tables">
  <BasicTable/> 
       </Route>
       <Route exact path="/buttons">
  <OutlinedCard/> 
       </Route>
       <Route exact path="/cards">
  <Cards/> 
       </Route>
       <Route exact path="/colors">
  <Color/> 
       </Route>
       <Route exact path="/borders">
  <Border/> 
       </Route>
       <Route exact path="/login">
  <Login/> 
       </Route>
       <Route exact path="/404">
  <Error/> 
       </Route>
       <Route exact path="/charts">
  <Chart/> 
       </Route>
       </Switch>
    </Box>
    </div>
  );
}



export default ResponsiveDrawer;