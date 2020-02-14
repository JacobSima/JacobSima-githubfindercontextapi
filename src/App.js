import React,{useEffect,useContext} from 'react';
import Navbar from './components/layout/Navbar'
import User from './components/users/User'
import Alert from './components/layout/Alert'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import About from './components/pages/About'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import {GithubContext} from './context/github/GithubState'
import './App.css';

const App = ()=>{

  const githubContext = useContext(GithubContext)

    useEffect(()=>{
      githubContext.usersMainPage()
      // eslint-disable-next-line
    },[])


    return (
      <Router>
      <div className="App">
       <Navbar title ="GitHub Finder" icon="fa fa-github"/>
       <div className="container">
          <Alert/>
          <Switch>
            <Route exact  path='/' component={Home} />
            <Route exact path='/about'  component={About}/>
            <Route exact path="/user/:login" component={User}/>
            <Route  component={NotFound}/>
          </Switch>       
       </div>
      </div>
      </Router>
      );
 
}

export default App;
