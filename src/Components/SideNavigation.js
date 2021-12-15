import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'; 
import ListItemIcon from '@mui/material/ListItemIcon'; 
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ExtensionIcon from '@mui/icons-material/Extension';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import GradeIcon from '@mui/icons-material/Grade';
import LogoutIcon from '@mui/icons-material/Logout';



import {Link} from '@material-ui/core'
import smallflcincicon from '../assets/images/smallflcincicon.png'



                                      
const SideNavigation = () => {



    const [isOpen, setIsOpen] = React.useState(false)

    const toggleDrawer = () => {
      setIsOpen(!isOpen)
    }


    const drawerItemList = () => (
        <Box sx={{width: 250, backgroundColor: '#5FAD56'}} role="presentation" className="drawerMenu">
          <List>
          <ListItem button>
              <ListItemIcon sx={{color: "white"}}>
              <AccountCircleIcon src={smallflcincicon}>Algebra for Home</AccountCircleIcon>
              </ListItemIcon>
              <Link href="/">Algebra for Home</Link>
            </ListItem>
           
            <ListItem button>
              <ListItemIcon sx={{color: "white"}}>
                <AccountCircleIcon/>
              </ListItemIcon>
              <Link href="/" >Account</Link>
            </ListItem>
       
         
            <ListItem button>
              <ListItemIcon sx={{color: "white"}}>
                <DashboardIcon/>
              </ListItemIcon>
              <Link href="/">Dashboard</Link>
            </ListItem>

            <ListItem button>
              <ListItemIcon sx={{color: "white"}}>
                <LibraryBooksIcon/>
              </ListItemIcon>
              <Link href="/">Lessons</Link>
            </ListItem>

            <ListItem button>
              <ListItemIcon sx={{color: "white"}}>
                <ExtensionIcon/>
              </ListItemIcon>
              <Link href="/">Practices</Link>
            </ListItem>

            <ListItem button>
              <ListItemIcon sx={{color: "white"}}>
                <HourglassFullIcon/>
              </ListItemIcon>
              <Link href="/">Quizzes</Link>
            </ListItem>

            <ListItem button>
              <ListItemIcon sx={{color: "white"}}>
                <GradeIcon/>
              </ListItemIcon>
              <Link href="/">Awards</Link>
            </ListItem>
       
       
           <ListItem button  >
           <ListItemIcon sx={{color: "white"}}>
             <LogoutIcon/>
           </ListItemIcon>
           <Link href="/">Logout</Link>
         </ListItem>
                  
                
          
          </List>
        </Box>
      )






return (
<>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Algebra for Home
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer} sx={{backgroundColor: '57FAD56'}}>
      {drawerItemList()}
      </Drawer>







</>

)



}

export default SideNavigation