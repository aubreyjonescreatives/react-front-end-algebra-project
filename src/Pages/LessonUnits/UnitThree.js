
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
marginLeft: '100px',  
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
margin: '50px 100px', 
backgroundColor: '#1B75BC', 
padding: '50px', 
width: '200px',  
textAlign: 'center',


}


const Lessons = () => {
   
    return (
     <>
    <Box sx={headerOne}>
    <Typography sx={headerOneType} variant="h4">Unit 3 Lessons</Typography>
    </Box>
     
    <Box sx={allCards}>

  
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Review 3.0
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
   

  
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Lesson 3.1
        </Typography>
      </CardContent>
      </Link>
    </Card>
   

   
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
       Lesson 3.2
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
    

    
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
        Lesson 3.3
        </Typography>
       
      </CardContent>
      </Link>
    </Card>


   
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
        Lesson 3.4
        </Typography>
       
       
      </CardContent>
      </Link>
    </Card>

   
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
        Lesson 3.5
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
   

   
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
        Lesson 3.6
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
   
   
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
        Lesson 3.7
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
    

    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
        Lesson 3.8
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
   

   
    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
        Lesson 3.9
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
   

 


    </Box>
     </>
    );
  }
  
  export default Lessons;