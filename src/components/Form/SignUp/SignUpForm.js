import React from 'react';
import '../FormComponents/FormStyle.css';
import InputEmail from '../FormComponents/InputEmail';
import InputPassword from '../FormComponents/InputPassword';
import SubmitBtn from '../FormComponents/SubmitBtn';
import ErrorMsg from '../FormComponents/ErrorMsg';
import {validateEmail} from '../FormComponents/FormFunctions';
import { Link } from 'react-router-dom';  
import {IoIosContact} from 'react-icons/io';

class SignUpForm extends React.Component {

  constructor(props) {
    super();
    this.state = {
      userNameSignUp: '',
      emailSignUp: '',
      passwordSignUp: '',
      passwordConfirmationSignUp: ''
    }
  }

  tryToSignUp = (event) => {
    event.preventDefault();
    var emailSignUp = this.state.emailSignUp.toLocaleLowerCase();
    var passwordSignUp = this.state.passwordSignUp;
    var passwordConfirmationSignUp = this.state.passwordConfirmationSignUp;
    var userNameSignUp = this.state.userNameSignUp
    
    if(this.formValidation(emailSignUp, passwordSignUp, passwordConfirmationSignUp)===true){
      
      fetch('http://localhost:3001/signUp', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: emailSignUp,
        password: passwordSignUp,
        userName: userNameSignUp
      })
    })
      .then(response => response.json())
      .then(data => {
        if(data.registered===true){
          this.props.onSignUp();
        }
        else document.getElementById('errorSignInMsg').innerHTML='Email already in use.';
      })
    }
    /* else, formValidation will show the relevant problem.  */
  }

  signUpNewUser(email, password, userFullName){
      return true; // Currently mock
  }

  checkPasswords(pass1, pass2){
    if(pass1.length>=8){
        if(pass1===pass2){
            document.getElementById('errorMsgSignUp').innerHTML='';
            return true;
        }
        else{
            document.getElementById('errorMsgSignUp').innerHTML='Passwords do not match.';
        }
    }
    else{
        document.getElementById('errorMsgSignUp').innerHTML='Password is too short, must be 8 letters minimun.';
    }
    return false;
    }

    onChangeFullName = (event) => {
      this.setState({userNameSignUp: event.target.value})
    }

    onChangeEmail = (event) => {
      this.setState({emailSignUp: event.target.value})
    }

    onChangePassword = (event) => {
      this.setState({passwordSignUp: event.target.value})
    }

    onChangeConfirmPassword = (event) => {
      this.setState({passwordConfirmationSignUp: event.target.value})
    }

    formValidation(email, pass1, pass2, userFullName){
        if(!email || !pass1 || !pass2 || !userFullName){
            document.getElementById('errorMsgSignUp').innerHTML='You must fill all of the details.';
        }
        if(validateEmail(email)===true){
            if(this.checkPasswords(pass1,pass2)){
                return true;
            }
        }
        else{
            document.getElementById('errorMsgSignUp').innerHTML='Invalid Email address.';
        }
        return false;
    }

    render(){
      return(
      <div>
        <form onSubmit={this.tryToSignUp}>

          <div className='ma2 logo center'>
                <IoIosContact className='pr2' size={30}/>
                <input 
                    id={this.props.id}
                    className='ba pa1 br2 b--black text1'
                    type="text"
                    placeholder="Full Name"
                    onChange={this.onChangeFullName}
                />
            </div>
          
          <InputEmail id="emailSignUp" onChangeEmail={this.onChangeEmail}/>
          <InputPassword id="passwordSignUp" iconType="password" text="Password" onChangePassword={this.onChangePassword}/>
          <InputPassword id="passwordConfirmation" iconType="confirm" text="Confirm Password" onChangePassword={this.onChangeConfirmPassword}/>

          <SubmitBtn text="Sign Up" />
          
          <Link
            className='ma2 link no-underline text1 pointer dark-blue ma2 center'
            to='/'>
              Already Sign Up? Sign In!
          </Link>
          
          <ErrorMsg id='errorMsgSignUp' />
          
        </form>
      </div>
      );
    }
}

export default SignUpForm;