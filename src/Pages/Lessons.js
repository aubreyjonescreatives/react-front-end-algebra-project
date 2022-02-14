
import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Link} from '@material-ui/core'; 


const headerOne = {
 
marginTop: '200px',
marginLeft: '50px',  
}


const headerOneType = {
  color: '#1B75BC', 
  fontSize: '50px', 
 
 
  }

const lessonLink = {
  color: 'white', 
  textDecoration: 'none', 
  '&:hover': {
    decoration: 'none'
  }, 
 
}

const allCards = {
display: 'flex', 
flexWrap: 'wrap', 
marginTop: '50px'

}


const lessonCard = {
margin: '50px', 
backgroundColor: '#1B75BC', 
padding: '50px', 
width: '150px', 
textAlign: 'center',
  '&:hover': {
    boxShadow: '8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)',
    transform: 'translate3D(0,-1px,0) scale(1.03)'
  }, 


}


const UnitEight = () => {
   
    return (
     <>
    <Box sx={headerOne}>
    <Typography sx={headerOneType} variant="h4">Lesson Units</Typography>
    </Box>
     
    <Box sx={allCards}>

  
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" href="/unitone" >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Unit 1
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
   

  
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" href="/unittwo">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
        Unit 2
        </Typography>
      </CardContent>
      </Link>
    </Card>
   

   
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" href="/unitthree">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
        Unit 3
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
    

    
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" href="/unitfour">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
        Unit 4
        </Typography>
       
      </CardContent>
      </Link>
    </Card>


   
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" href="/unitfive">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
        Unit 5
        </Typography>
       
       
      </CardContent>
      </Link>
    </Card>

   
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" href="/unitsix">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
        Unit 6
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
   

   
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" href="/unitseven">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
        Unit 7
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
   
   
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" href="/uniteight">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
        Unit 8
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
    


 


    </Box>
     </>
    );
  }
  
  export default UnitEight;