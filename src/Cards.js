import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ForumIcon from '@mui/icons-material/Forum';
import Divider from '@mui/material/Divider';



const card1 = (

    <CardContent >
     
    <Typography sx={{ fontSize: 20 }}    gutterBottom>
      Earnings (MONTHLY)
    </Typography>
   
    <Typography   component="span">
      $40,000
<WorkIcon className="card-icon" />
    </Typography>
  </CardContent>
 

);
const card2 = (

    <CardContent >
     
    <Typography sx={{ fontSize: 20 }}    gutterBottom>
      Earnings (ANNUAL)
    </Typography>
   
    <Typography   component="span">
      $215,000
< AttachMoneyIcon className="card-icon" />
    </Typography>
  </CardContent>
 

);
const card3 = (

    <CardContent >
     
    <Typography sx={{ fontSize: 20 }}    gutterBottom>
      Tasks
    </Typography>
   
    <Typography className="new"   component="div">
      50% 
      < AssignmentIcon className="card-icon" />
    </Typography>
  </CardContent>
 

);
const card4 = (

    <CardContent >
     
    <Typography sx={{ fontSize: 20 }}    gutterBottom>
      PENDING REQUESTS
    </Typography>
   
    <Typography   component="span">
      18
<ForumIcon className="card-icon" />
    </Typography>
  </CardContent>
 

);
const card5 = (

    <CardContent >
     
    <Typography sx={{ fontSize: 20 }}    gutterBottom>
    Default Card Example
    </Typography>
    <Divider />
    <Typography   component="span">
    This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.

    </Typography>
  </CardContent>
 

);
const card6 = (

    <CardContent >
     
    <Typography sx={{ fontSize: 20 }}    gutterBottom>
    Dropdown Card Example
    </Typography>
    <Divider />
    <Typography   component="span">
    Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.
    </Typography>
  </CardContent>
 

);
const card7 = (

    <CardContent >
     
    <Typography sx={{ fontSize: 20 }}    gutterBottom>
    Basic Card Example
    </Typography>
    <Divider />
    <Typography   component="span">
    The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
   </Typography>
  </CardContent>
 

);
const card8 = (

    <CardContent >
     
    <Typography sx={{ fontSize: 20 }}    gutterBottom>
    Collapsable Card Example
    </Typography>
    <Divider />
    <Typography   component="span">
    This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!
    </Typography>
  </CardContent>
 

);

export function Cards() {
  return (
      <div>
      <div className="component-box">
    <Box className="components-cards1" sx={{ minWidth: 220 }}>
      <Card variant="outlined">{card1}</Card>
    </Box>
    <Box className="components-cards2" sx={{ minWidth: 220 }}>
    <Card variant="outlined">{card2}</Card>
  </Box>
  <Box className="components-cards3" sx={{ minWidth: 220 }}>
    <Card variant="outlined">{card3}</Card>
  </Box>
  <Box className="components-cards4" sx={{ minWidth: 220 }}>
    <Card variant="outlined">{card4}</Card>
  </Box>
  </div>
  <div  className="component-box">
  <Box className="components-btn">
    <Card variant="outlined">{card5}</Card>
  </Box>
  <Box className="components-btn">
    <Card variant="outlined">{card6}</Card>
  </Box>
  </div>
  <div className="component-box">
  <Box className="components-btn">
    <Card variant="outlined">{card7}</Card>
  </Box>
  <Box className="components-btn">
    <Card variant="outlined">{card8}</Card>
  </Box>
  </div>
  </div>
  );
}
