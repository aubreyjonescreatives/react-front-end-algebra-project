
import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Link} from '@material-ui/core'; 




const unitOne = {
  padding: '150px 100px 20px 75px', 
  fontSize: '50px', 
  color: '#1B75BC'

}


const allCards = {
display: 'flex', 
flexWrap: 'wrap', 
marginTop: '100px'

}


const lessonCard = {
width: '350px', 
margin: '20px auto'


}


const Lessons = () => {
   
    return (
     <>
     <Typography sx={unitOne}>Unit 1 </Typography>
    <Box sx={allCards}>
  
  <Link href='/unitonelessonzero' target="_blank">
    <Card sx={lessonCard}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="Lesson 1.0"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lesson 1.0
        </Typography>
       
      </CardContent>
     
    </Card>
    </Link>
  
    <Card sx={lessonCard}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lesson 1.1
        </Typography>
       
      </CardContent>
     
    </Card>

    <Card sx={lessonCard}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 1.2
        </Typography>
       
      </CardContent>
     
    </Card>

    <Card sx={lessonCard}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 1.2
        </Typography>
       
      </CardContent>
     
    </Card>

    <Card sx={lessonCard}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 1.3
        </Typography>
       
      </CardContent>
     
    </Card>


    <Card sx={lessonCard}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 1.4
        </Typography>
       
      </CardContent>
     
    </Card>


    <Card sx={lessonCard}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 1.5
        </Typography>
       
      </CardContent>
     
    </Card>


    <Card sx={lessonCard}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 1.6
        </Typography>
       
      </CardContent>
     
    </Card>


    <Card sx={lessonCard}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 1.7
        </Typography>
       
      </CardContent>
     
    </Card>


    <Card sx={lessonCard}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 1.8
        </Typography>
       
      </CardContent>
     
    </Card>

    <Card sx={lessonCard}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 1.9
        </Typography>
       
      </CardContent>
     
    </Card>

    <Card sx={lessonCard}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lesson 1.10
        </Typography>
       
      </CardContent>
     
    </Card>

    </Box>
     </>
    );
  }
  
  export default Lessons;