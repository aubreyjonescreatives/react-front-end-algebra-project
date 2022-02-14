
import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Link} from '@material-ui/core'; 


const algebraOne = {
padding: '150px 100px 20px 75px', 
fontSize: '50px', 
color: '#1B75BC'
}

const allCards = {
display: 'flex', 
flexWrap: 'wrap', 
margin: '50px', 
marginTop: '50px'

}


const lessonCard = {
width: '350px', 
margin: '20px'


}


const Lessons = () => {
   
    return (
     <>

    <Typography sx={algebraOne}>Algebra 1</Typography>

    <Box sx={allCards}>


    <Link href="/unitone">
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
    </Link>


    <Link href="/unittwo">
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

    </Link>


 <Link href="/unitthree">
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

    </Link>


    <Link href="/unitfour">
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

    </Link>


<Link href="/unitfive">

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


    </Link>


<Link href="/unitsix">

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


    </Link>


<Link href="/unitseven">

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

    </Link>


<Link href="/uniteight">

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

    </Link>


<Link href="/unitnine">


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

    </Link>


<Link href="/unitten">


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

    </Link>


<Link href="/uniteleven">

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


    </Link>


<Link href="/unittwelve">

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


    </Link>

    </Box>
     </>
    );
  }
  
  export default Lessons;