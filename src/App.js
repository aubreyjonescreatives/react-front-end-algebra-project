import React, {Suspense } from 'react'; 
import './App.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NetlifyIdentityContext from 'react-netlify-identity-gotrue'; 



import TopNavigation from './Components/TopNavigation'
import Awards from './Pages/Awards'
import Dashboard from './Pages/Dashboard'
import Landing from './Pages/Landing'
import Lessons from './Pages/Lessons'
import Practices from './Pages/Practices'
import Quizzes from './Pages/Quizzes'
import Profile from './Pages/Profile'
import LoginForm from './Components/Login/LoginForm'; 
import SignUpForm from './Components/Login/SignUpForm';
import Welcome from './Components/Login/Welcome'; 
import Confirm from './Components/Login/Confirm'; 

const App = () => {
  return (
   <>
   <Router>
  <NetlifyIdentityContext url='https://flc-inc-math-for-home.netlify.app/'>
   <TopNavigation />
   <Suspense>
   <Switch>
   <Route path="/" exact component={Landing} />
  <Route path="/dashboard" exact component={Dashboard} />
  <Route path="/lessons" exact component={Lessons} />
  <Route path="/practices" exact component={Practices} />
  <Route path="/quizzes" exact component={Quizzes} />
  <Route path="/awards" exact component={Awards} />
  <Route path="/profile" exact component={Profile} />
  <Route path="/login" exact component={LoginForm} />
  <Route path="/signup" exact component={SignUpForm} />
  <Route path="/welcome" exact component={Welcome} />
  <Route path="/confirm" exact component={Confirm} />
  </Switch>
  </Suspense>
  </NetlifyIdentityContext> 
  </Router>
 
   </>
  );
}

export default App;
