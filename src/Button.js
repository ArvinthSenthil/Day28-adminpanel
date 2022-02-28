import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ButtonGroup from '@mui/material/ButtonGroup';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (

    <CardContent >
     
      <Typography sx={{ fontSize: 20 }}    gutterBottom>
        Circle Buttons
      </Typography>
      <Divider />
      <Typography   component="span">
        use font Awsome icons(included with this theme package)along with the circle buttons as shown in example below
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        .btn-circle
      </Typography>
      <Typography variant="body2">
        <CheckCircleIcon color="success"/>
        <InfoIcon color="primary"/>
        < RemoveCircleIcon color="error"/>
        <AccountCircleIcon color="secondary"/>
      </Typography>
    </CardContent>

);
const cardnew = (

    <CardContent >
     
      <Typography sx={{ fontSize: 20 }}    gutterBottom>
        Split Buttons
      </Typography>
      <Divider />
      <Typography   component="span">
      Works with any button colors. just use the .btn-icon-split class and the markup in the examples below.
      </Typography>
      <Typography variant="body2">
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
   
    </ButtonGroup>
      </Typography>
    </CardContent>

);

export function OutlinedCard() {
  return (
      <div>
    <Box className="components-btn">
      <Card variant="outlined">{card}</Card>
    </Box>
    <Box className="components-btn">
    <Card variant="outlined">{cardnew}</Card>
  </Box>
  </div>
  );
}
