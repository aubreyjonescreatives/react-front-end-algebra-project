import * as React from 'react';
import { useIdentityContext } from 'react-netlify-identity-gotrue'
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
import Avatar from '@mui/material/Avatar';


import {Link} from '@material-ui/core'
import smallflcincicon from '../assets/images/smallflcincicon.png'



                                      
const TopNavigation = () => {


  const identity = useIdentityContext()

    const [isOpen, setIsOpen] = React.useState(false)

    const toggleDrawer = () => {
      setIsOpen(!isOpen)
    }


    const drawerItemList = () => (
        <Box sx={{width: 300, backgroundColor: 'white'}} role="presentation" className="drawerMenu">
          <List>
          <ListItem button>
              <ListItemIcon sx={{color: "#1B75BC"}}>
              <Avatar alt="FLC INC" src={smallflcincicon} />
              </ListItemIcon>
              <Link href="/">FLC Inc's Algebra for Home</Link>
            </ListItem>
           
          
       
         {identity.user && (
            <ListItem button>
              <ListItemIcon sx={{color: "#1B75BC"}}>
                <DashboardIcon/>
              </ListItemIcon>
              <Link href="/Dashboard">Dashboard</Link>
            </ListItem>
)}
  {identity.user && (


            <ListItem button>
              <ListItemIcon sx={{color: "#1B75BC"}}>
                <LibraryBooksIcon/>
              </ListItemIcon>
              <Link href="/Lessons">Lessons</Link>
            </ListItem>
)}
{identity.user && (


            <ListItem button>
              <ListItemIcon sx={{color: "#1B75BC"}}>
                <ExtensionIcon/>
              </ListItemIcon>
              <Link href="/Practices">Practices</Link>
            </ListItem>
)}
{identity.user && (


            <ListItem button>
              <ListItemIcon sx={{color: "#1B75BC"}}>
                <HourglassFullIcon/>
              </ListItemIcon>
              <Link href="/Quizzes">Quizzes</Link>
            </ListItem>
)}
{identity.user && (


            <ListItem button>
              <ListItemIcon sx={{color: "#1B75BC"}}>
                <GradeIcon/>
              </ListItemIcon>
              <Link href="/Awards">Awards</Link>
            </ListItem>
)}
{identity.user && (



            <ListItem button>
                 <ListItemIcon>
      <Avatar sx={{width: 30, height: 30, backgroundColor: '#1B75BC', color: "white"}}>{identity.user?.user_metadata?.full_name.slice(0, 1)}</Avatar>
        </ListItemIcon>
              <Link href="/Profile" >{identity.user?.user_metadata?.full_name}'s Profile</Link>
            </ListItem>
       

       )}
       {identity.user && (
       
           <ListItem button onClick={identity.logout} >
           <ListItemIcon sx={{color: "#1B75BC"}}>
             <LogoutIcon/>
           </ListItemIcon>
           <Link href="/">Logout</Link>
         </ListItem>
       )}            
                
          
          </List>
        </Box>
      )






return (
<>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'white'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "#1B75BC" }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
          <Typography sx={{ flexGrow: 2, color: "#1B75BC" }}>
          <ListItemIcon sx={{color: "#1B75BC"}}>
              <Avatar alt="FLC INC" src={smallflcincicon} />
              </ListItemIcon>
            FLC Inc's Algebra for Home
          </Typography>
          </Link>
          {!identity.user && (
          <Link href="/SignUpForm" sx={{color: "#1B75BC"}}>Sign Up</Link>
          )}
            {!identity.user && (
            <Link href="/LoginForm" sx={{color: "#1B75BC"}}>Login</Link> 
          )}
          
         
          {identity.user && (
      <ListItem sx={{justifyContent: 'flex-end'}} button >
        <Typography>
        <Link href='/Profile'>
        <ListItemIcon>
      <Avatar sx={{width: 30, height: 30, backgroundColor: '#1B75BC', color: "white"}}>{identity.user?.user_metadata?.full_name.slice(0, 1)}</Avatar>
        </ListItemIcon>
          Hi, {identity.user?.user_metadata?.full_name}</Link>
        </Typography>
      </ListItem>
      )}



        </Toolbar>
      </AppBar>
    </Box>

    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer} sx={{backgroundColor: '57FAD56'}}>
      {drawerItemList()}
      </Drawer>







</>

)



}

export default TopNavigation