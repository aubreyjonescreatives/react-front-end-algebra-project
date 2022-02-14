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
        <Box sx={{width: 300, backgroundColor: 'white', boxShadow: 'none'}} role="presentation" className="drawerMenu">
          <List>

          {identity.user && (

          <ListItem button>
              <ListItemIcon sx={{color: "#1B75BC"}}>
              <Avatar alt="FLC INC" src={smallflcincicon} />
              </ListItemIcon>
              <Link href="/">FLC Inc's Algebra for Home</Link>
            </ListItem>
           
           )}
       
         {identity.user && (
            <ListItem button>
              <ListItemIcon sx={{color: "#1B75BC"}}>
                <DashboardIcon/>
              </ListItemIcon>
              <Link href="/dashboard">Dashboard</Link>
            </ListItem>
)}
  {identity.user && (


            <ListItem button>
              <ListItemIcon sx={{color: "#1B75BC"}}>
                <LibraryBooksIcon/>
              </ListItemIcon>
              <Link href="/lessons">Lessons</Link>
            </ListItem>
)}
{identity.user && (


            <ListItem button>
              <ListItemIcon sx={{color: "#1B75BC"}}>
                <ExtensionIcon/>
              </ListItemIcon>
              <Link href="/practices">Practices</Link>
            </ListItem>
)}
{identity.user && (


            <ListItem button>
              <ListItemIcon sx={{color: "#1B75BC"}}>
                <HourglassFullIcon/>
              </ListItemIcon>
              <Link href="/quizzes">Quizzes</Link>
            </ListItem>
)}
{identity.user && (


            <ListItem button>
              <ListItemIcon sx={{color: "#1B75BC"}}>
                <GradeIcon/>
              </ListItemIcon>
              <Link href="/awards">Awards</Link>
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



<Box sx={{ flexGrow: 3}}>
      <AppBar position="fixed" sx={{backgroundColor: 'white'}}>
        <Toolbar>

        {identity.user && (
          <ListItem>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "#1B75BC" }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          </ListItem>

        )}


         {!identity.user && (
        <ListItem>
          <Link sx={{backgroundColor: 'white', color: "#1B75BC", clear: 'none' }} href="/">
          <ListItemIcon sx={{float: 'left'}}>
              <Avatar alt="FLC INC" src={smallflcincicon} />
              </ListItemIcon>
          <Typography sx={{float: 'left', marginTop: '50px'}}>
            Math for Home
          </Typography>
          </Link>
          </ListItem>
         )}
         
          {!identity.user && (
          <Link href="/signup" sx={{color: "#1B75BC", width: '20%'}}>Sign Up</Link>
          )}
            {!identity.user && (
            <Link href="/login" sx={{color: "#1B75BC"}}>Login</Link> 
          )}
          
         
          {identity.user && (
      <ListItem sx={{justifyContent: 'flex-end'}} >
        <Typography sx={{color: '#1B75BC'}}>
        <ListItemIcon>
      <Avatar sx={{width: 30, height: 30, backgroundColor: '#1B75BC', color: "white"}}>{identity.user?.user_metadata?.full_name.slice(0, 1)}</Avatar>
        </ListItemIcon>
          Hi, {identity.user?.user_metadata?.full_name}
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