import * as React from 'react'; 
import './App.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TopNavigation from './Components/TopNavigation'
import Awards from './Pages/Awards'
import Dashboard from './Pages/Dashboard'
import Landing from './Pages/Landing'
import Lessons from './Pages/Lessons'
import Practices from './Pages/Practices'
import Quizzes from './Pages/Quizzes'
import Settings from './Pages/Settings'


const App = () => {
  return (
   <>
   <Router>
   <TopNavigation />
   <Route path="/" exact component={Landing} />
  <Route path="/Dashboard" exact component={Dashboard} />
  <Route path="/Lessons" exact component={Lessons} />
  <Route path="/Practices" exact component={Practices} />
  <Route path="/Quizzes" exact component={Quizzes} />
  <Route path="/Settings" exact component={Settings} />
   
  </Router>
   
   </>
  );
}

export default App;
