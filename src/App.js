import './App.css';
import React, {useState} from 'react';
import Top from './components/Top/Top';
import SignIn from './components/Form/SignIn/SignIn';
import SignUp from './components/Form/SignUp/SignUp';
import ForgotPassword from './components/Form/ForgotPassword/ForgotPassword';
import Particles from 'react-particles-js';
import HomePage from './components/HomePage/HomePage';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';  



const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isSignedIn: false,
      user: {
        email: '',
        userName: '',
        password: '',
        events: [],
        meetings: [],
        projects: [],
        toDos: []
      }
    }
  }
 
    onSignIn = (userSignIn) => {
      this.setState({
        isSignedIn: true
      });
      this.setState(Object.assign(this.state.user, userSignIn))
      console.log(userSignIn)
    }

  onSignOut = (event) => {
    this.setState({
      isSignedIn: false
    })
  }

  showPage(){
    switch(this.state.isSignedIn){
      case true:
        return <HomePage onSignOut={this.onSignOut} user={this.state.user}/>
      case false:
        return <SignIn onSignIn={this.onSignIn} />
      default:
        return <h1>Error!</h1>
    }
  }
   
  render() {
    return (
      <Router>
        <div className="App">
          <Top />
          <Particles className='particles'
            params={particlesOptions}
          />
          
          <Switch>
            <Route exact path="/">
              {this.showPage()}
            </Route>
            <Route exact path="/signUp">
              <SignUp />
            </Route>
            <Route exact path="/forgotPassword">
              <ForgotPassword />
            </Route>
            

          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
