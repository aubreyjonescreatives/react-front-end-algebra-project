
import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Link} from '@material-ui/core'; 
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ListItem from '@mui/material/ListItem'; 
import ListItemIcon from '@mui/material/ListItemIcon';




const headerOne = {
 
  marginTop: '200px',
  marginLeft: '50px',  
  }
  
  
  const headerOneType = {
    color: '#1B75BC', 
    fontSize: '50px', 
    }


    
  const headerOneType2 = {
    color: '#1B75BC', 
    fontSize: '42px', 
    paddingTop: '50px'
   
    }


    const headerTwo = {
 
      marginTop: '100px',
      marginLeft: '50px',  
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
width: '250px', 
textAlign: 'center',
  '&:hover': {
    boxShadow: '8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)',
    transform: 'translate3D(0,-1px,0) scale(1.03)'
  }, 


}



const lessonCard2 = {
  margin: '50px', 
  backgroundColor: '#1B75BC', 
  padding: '50px', 
  width: '250px', 
  textAlign: 'center',
    '&:hover': {
      boxShadow: '8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)',
      transform: 'translate3D(0,-1px,0) scale(1.03)'
    }, 
  
  
  }

const awardbuttonStyles = {
  color: '#1B75BC', 
  backgroundColor: 'white', 
  margin: "10px", 
  '&:hover': {
    backgroundColor: 'white', 
    border: '1px solid #1B75BC', 
    color: '#1B75BC'
  },
}
  

const Dashboard = () => {
   


  const identity = useIdentityContext()



    return (
     <>
    
     
     <Box sx={headerOne}>
    <Typography sx={headerOneType} variant="h3">Hello, {identity.user?.user_metadata?.full_name}!</Typography>
    <Typography sx={headerOneType2} variant="h4">What would you like to learn today?</Typography>
  
    </Box>

    <Box sx={headerTwo}>
    <Typography sx={headerOneType} variant="h3">Start Learning</Typography>
   
   
    <Box sx={allCards}>


    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Lesson 1.0
        </Typography>
       
      </CardContent>
      </Link>
    </Card>



    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Review 5.0
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
   



    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Lesson 4.5
        </Typography>
       
      </CardContent>
      </Link>
    </Card>

</Box>


    </Box>



    <Box sx={headerTwo}>
    <Typography sx={headerOneType} variant="h3">Current Lessons</Typography>
   
   
    <Box sx={allCards}>


    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Lesson 1.0
        </Typography>
       
      </CardContent>
      </Link>
    </Card>



    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Review 5.0
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
   



    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Lesson 7.3
        </Typography>
       
      </CardContent>
      </Link>
    </Card>

</Box>


    </Box>





    <Box sx={headerTwo}>
    <Typography sx={headerOneType} variant="h3">Current Practices</Typography>
   
   
    <Box sx={allCards}>


    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Practice 1.0
        </Typography>
       
      </CardContent>
      </Link>
    </Card>



    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Practice 5.0
        </Typography>
       
      </CardContent>
      </Link>
    </Card>
   



    <Card sx={lessonCard}>
    <Link sx={lessonLink} underline="none" >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Practice 8.0
        </Typography>
       
      </CardContent>
      </Link>
    </Card>

</Box>


    </Box>





    <Box sx={headerTwo}>
    <Typography sx={headerOneType} variant="h3">Awards</Typography>
   
   
    <Box sx={allCards}>


    <Card sx={lessonCard2}>
    <Link sx={lessonLink} underline="none" >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Lesson 1.0
        </Typography>
        <ListItem sx={{textAlign: 'center', margin: '0, auto', color: 'white'}}>
              <ListItemIcon>
              <EmojiEventsIcon alt="award" sx={{color: "#CD7F32", fontSize: '50px'}}/>
              </ListItemIcon>
              Bronze Cup Award
            </ListItem>
        <Button sx={awardbuttonStyles}>Award Details</Button>
      </CardContent>
      </Link>
    </Card>



    <Card sx={lessonCard2}>
    <Link sx={lessonLink} underline="none" >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Review 5.0
        </Typography>

        <ListItem sx={{textAlign: 'center', margin: '0, auto', color: 'white'}}>
              <ListItemIcon>
              <EmojiEventsIcon alt="award" sx={{color: "#FFD700", fontSize: '50px'}}/>
              </ListItemIcon>
              Gold Cup Award
              
            </ListItem>
            <Button sx={awardbuttonStyles}>Award Details</Button>
    
       
      </CardContent>
      </Link>
    </Card>
   



    <Card sx={lessonCard2}>
    <Link sx={lessonLink} underline="none" >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Review 8.0
        </Typography>
        <ListItem sx={{textAlign: 'center', margin: '0, auto', color: 'white'}}>
              <ListItemIcon>
              <EmojiEventsIcon alt="award" sx={{color: "#C0C0C0", fontSize: '50px'}}/>
              </ListItemIcon>
              Silver Cup Award
              
            </ListItem>
            <Button sx={awardbuttonStyles}>Award Details</Button>
    




      </CardContent>
      </Link>
    </Card>

</Box>


    </Box>


     
     
     </>
    );
  }
  
  export default Dashboard;