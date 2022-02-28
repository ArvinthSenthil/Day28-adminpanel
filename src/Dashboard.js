import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chart from "./chart";
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ForumIcon from '@mui/icons-material/Forum';


 export function Dashboard(){
   return(
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
  
  <Chart/>
  
  </div>

    )
}
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