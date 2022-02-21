
import * as React from 'react'; 
import kidLearning from '../assets/images/kidlearning.png'
import learnanywhere from '../assets/images/learnanywhere.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Link} from '@material-ui/core'; 


const landingIntro = {
  marginTop: '100px', 
  color: '#1B75BC'
}

const landingIntroType = {
textAlign: 'center'

}

const landingIntroType2 = {
  textAlign: 'center',
  marginTop: '50px'
  
}


const landing = {
  marginTop: '100px',
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



const landingType3 = {
  textAlign: 'center', 
 paddingTop: '100px', 
 paddingLeft: '30px'
}


const landingType4 = {
  textAlign: 'center', 
 paddingLeft: '30px'
}



 const landingA = {
  marginTop: '150px',
  display: 'flex', 
  borderTop: '1px solid #1B75BC',
  borderBottom: '1px solid #1B75BC'
}




const landingTypeA = {
  paddingTop: '250px', 
  paddingBottom: '15px', 
 }
 
 const landingTypeA2 = {
   paddingTop: '5px', 
   paddingBottom: '15px'
  }
  
 
 
 const landingTypeA3 = {
   padding: '5px'
  }
 
 
 
const landing1A = {
  width: '50%',
  margin: '40px', 
  
}


const landingHeroA = {
width: '100%', 
marginTop: '100px'
}





const Landing = () => {
   
    return (
     <>

<Box sx={landingIntro}>


<Typography variant="h3" sx={landingIntroType}>
      Welcome to FLC Inc's 

      </Typography>
    
      <Typography variant="h3" sx={landingIntroType2}>
      Math for Home

      </Typography>
</Box>


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

      <Typography variant="h4" sx={landingType3}>
      We value all different learning styles

      </Typography>
      
      <Typography variant="h4" sx={landingType4}>
      and create a fun online learning environment for everyone. 
      </Typography>
     
      </Box>
      </Box>

    <Box sx={landingA}>



    <Box  sx={landing2}>
      <Typography variant="h4" sx={landingTypeA}>
     Our program is available

      </Typography>
      <Typography variant="h4" sx={landingTypeA2}>
      anywhere and anytime.

      </Typography>

      </Box>

      <Box sx={landing1A}>
    <Card sx={landingHeroA}>
    <CardMedia
        component="img"
        image={learnanywhere}
        alt="learn anywhere"
      />
    </Card>
    </Box>




    </Box>
     
     </>
    );
  }
  
  export default Landing;