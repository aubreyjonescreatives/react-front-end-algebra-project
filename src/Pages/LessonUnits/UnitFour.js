
import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const allCards = {
display: 'flex', 
flexWrap: 'wrap', 


}


const lessonCard = {
width: '350px', 
margin: '20px auto'


}


const Lessons = () => {
   
    return (
     <>
    <Box sx={allCards}>
    <Card sx={lessonCard}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Unit 1
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
          Unit 2
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
          Unit 3
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
          Unit 4
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
          Unit 5
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
          Unit 6
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
          Unit 7
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
          Unit 8
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
          Unit 9
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
          Unit 10
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
          Unit 11
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
          Unit 12
        </Typography>
       
      </CardContent>
     
    </Card>

    </Box>
     </>
    );
  }
  
  export default Lessons;