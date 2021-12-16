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
import Settings from './Pages/Settings'
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
  <Route path="/Dashboard" exact component={Dashboard} />
  <Route path="/Lessons" exact component={Lessons} />
  <Route path="/Practices" exact component={Practices} />
  <Route path="/Quizzes" exact component={Quizzes} />
  <Route path="/Awards" exact component={Awards} />
  <Route path="/Settings" exact component={Settings} />
  <Route path="/LoginForm" exact component={LoginForm} />
  <Route path="/SignUpForm" exact component={SignUpForm} />
  <Route path="/Welcome" exact component={Welcome} />
  <Route path="/Confirm" exact component={Confirm} />
  </Switch>
  </Suspense>
  </NetlifyIdentityContext> 
  </Router>
 
   </>
  );
}

export default App;
