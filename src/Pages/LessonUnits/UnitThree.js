
import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const headerOne = {
color: '#1B75BC', 
marginTop: '200px',
marginLeft: '100px',  
fontSize: '36px'
}



const allCards = {
display: 'flex', 
flexWrap: 'wrap', 
marginTop: '50px'

}


const lessonCard = {
margin: '50px 100px', 
backgroundColor: '#1B75BC', 
color: 'white', 
padding: '50px', 
width: '200px',  
textAlign: 'center'

}


const Lessons = () => {
   
    return (
     <>
    <Box sx={headerOne}>
    <Typography>Unit 3 Lessons</Typography>
    </Box>
     
    <Box sx={allCards}>
    <Card sx={lessonCard}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Review
        </Typography>
       
      </CardContent>
     
    </Card>
    <Card sx={lessonCard}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lesson 1
        </Typography>
      </CardContent>
     
    </Card>
    <Card sx={lessonCard}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Lesson 2
        </Typography>
       
      </CardContent>
     
    </Card>

    <Card sx={lessonCard}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 3
        </Typography>
       
      </CardContent>
     
    </Card>

    <Card sx={lessonCard}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 4
        </Typography>
       
       
      </CardContent>
     
    </Card>

    <Card sx={lessonCard}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 5
        </Typography>
       
      </CardContent>
     
    </Card>


    <Card sx={lessonCard}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 6
        </Typography>
       
      </CardContent>
     
    </Card>


    <Card sx={lessonCard}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 7
        </Typography>
       
      </CardContent>
     
    </Card>


    <Card sx={lessonCard}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 8
        </Typography>
       
      </CardContent>
     
    </Card>


    <Card sx={lessonCard}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 9
        </Typography>
       
      </CardContent>
     
    </Card>


 


    </Box>
     </>
    );
  }
  
  export default Lessons;