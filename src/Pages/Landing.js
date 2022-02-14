
import * as React from 'react'; 
import kidLearning from '../assets/images/kidlearning.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Link} from '@material-ui/core'; 


const landing = {
  marginTop: '200px',
  display: 'flex'
}



const landing1 = {
  width: '50%'
}


const landingHero = {
width: '100%',   
margin: '0px 50px'


}


const landing2 = {
  textAlign: 'center',
  margin: '0px auto', 
  color: '#1B75BC',
  padding: '20px'
}

const landingType = {
 paddingTop: '10px', 
 paddingBottom: '15px'
}

const landingType2 = {
  paddingTop: '5px', 
  paddingBottom: '75px'
 }
 


const landingType3 = {
  padding: '5px'
 }



 const landingA = {
  marginTop: '200px',
  display: 'flex'
}






const Landing = () => {
   
    return (
     <>
  <Box sx={landing}>
  <Box sx={landing1}>
    <Card sx={landingHero}>
    <CardMedia
        component="img"
        image={kidLearning}
        alt="Kid Learning"
      />
    </Card>
    </Box>

    <Box  sx={landing2}>
      <Typography variant="h3" sx={landingType}>
      Welcome to

      </Typography>
      <Typography variant="h4" sx={landingType2}>
      Math for Home

      </Typography>

      <Typography variant="h5" sx={landingType3}>
      Where we value all different learning styles

      </Typography>
      <Typography variant="h5" sx={landingType3}>
      and create a fun learning environment. 
      </Typography>
      </Box>
      </Box>

    <Box sx={landingA}>









    </Box>
     
     </>
    );
  }
  
  export default Landing;