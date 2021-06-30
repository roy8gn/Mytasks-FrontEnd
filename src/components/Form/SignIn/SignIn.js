import React from 'react';
import '../FormComponents/FormStyle.css';
import InputEmail from '../FormComponents/InputEmail';
import InputPassword from '../FormComponents/InputPassword';
import SubmitBtn from '../FormComponents/SubmitBtn';
import ErrorMsg from '../FormComponents/ErrorMsg';
import { Link } from 'react-router-dom'; 


class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  onChangeEmail = (event) => {
    this.setState( {email:event.target.value});
  }

  onChangePassword = (event) =>{
    this.setState( {password:event.target.value});
  }

  tryToLogIn = (event) =>{
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    
    fetch('http://localhost:3001/', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        if(data.login===true){
          document.getElementById('errorSignInMsg').innerHTML='';
          this.props.onSignIn(data.user);
        }
        else document.getElementById('errorSignInMsg').innerHTML='Incorrect details, try again.';
      })
  }



  render(){
      return(
      <div className = 'formBox mt5 center br3 shadow-2 ba bw2 w-50'>
        <form onSubmit={this.tryToLogIn}>
          <h1 className='f2'>Welcome to MyTasks!</h1>
          
          <InputEmail id="email" onChangeEmail={this.onChangeEmail}/>
          <InputPassword id="password" iconType='password' text="Password" onChangePassword={this.onChangePassword}/>
         
          <SubmitBtn
            className='pt1 pb1 pl3 pr3 w-30 shadow-2 b--black br4 button no-underline black ma3 f4 ba bw1 center grow'
            to='/homePage'
            text='Sign In'
            >
              
          </SubmitBtn>
          
          <Link
            className='ma2 no-underline text1 pointer dark-blue ma2 center'
            to='/forgotPassword'>
              Forgot Password?
          </Link>

          <Link
            className='ma2 no-underline text1 pointer dark-blue ma2 center'
            to='/signUp'>
              Sign Up
          </Link>


          <ErrorMsg id='errorSignInMsg'/>
          
        </form>
      </div>
      );
    }
  }

export default SignIn;