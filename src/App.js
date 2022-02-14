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
import LoginForm from './Components/Login/LoginForm'; 
import SignUpForm from './Components/Login/SignUpForm';
import Welcome from './Components/Login/Welcome'; 
import Confirm from './Components/Login/Confirm'; 
import UnitOne from './Pages/LessonUnits/UnitOne.js'; 
import UnitTwo from './Pages/LessonUnits/UnitTwo.js';
import UnitThree from './Pages/LessonUnits/UnitThree.js';
import UnitFour from './Pages/LessonUnits/UnitFour.js';
import UnitFive from './Pages/LessonUnits/UnitFive.js';
import UnitSix from './Pages/LessonUnits/UnitSix.js';
import UnitSeven from './Pages/LessonUnits/UnitSeven.js';
import UnitEight from './Pages/LessonUnits/UnitEight.js';
import UnitNine from './Pages/LessonUnits/UnitNine.js';
import UnitTen from './Pages/LessonUnits/UnitTen.js';
import UnitEleven from './Pages/LessonUnits/UnitEleven.js';
import UnitTwelve from './Pages/LessonUnits/UnitTwelve.js';
import UnitOneLessonZero from './Pages/UnitOne/OneZero'; 


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
  <Route path="/login" exact component={LoginForm} />
  <Route path="/signup" exact component={SignUpForm} />
  <Route path="/welcome" exact component={Welcome} />
  <Route path="/confirm" exact component={Confirm} />
  <Route path="/unitone" exact component={UnitOne} />
  <Route path="/unitonelessonzero" exact component={UnitOneLessonZero} />
  <Route path="/unittwo" exact component={UnitTwo} />
  <Route path="/unitthree" exact component={UnitThree} />
  <Route path="/unitfour" exact component={UnitFour} />
  <Route path="/unitfive" exact component={UnitFive} />
  <Route path="/unitsix" exact component={UnitSix} />
  <Route path="/unitseven" exact component={UnitSeven} />
  <Route path="/uniteight" exact component={UnitEight} />
  <Route path="/unitnine" exact component={UnitNine} />
  <Route path="/unitten" exact component={UnitTen} />
  <Route path="/uniteleven" exact component={UnitEleven} />
  <Route path="/unittwelve" exact component={UnitTwelve} />
  </Switch>
  </Suspense>
  </NetlifyIdentityContext> 
  </Router>
 
   </>
  );
}

export default App;
