import React from 'react';
import '../FormComponents/FormStyle.css';
import InputEmail from '../FormComponents/InputEmail';
import SubmitBtn from '../FormComponents/SubmitBtn';
import ErrorMsg from '../FormComponents/ErrorMsg';
import {checkIfExists, validateEmail} from '../FormComponents/FormFunctions';
import { Link } from 'react-router-dom'; 

class ForgotPassword extends React.Component {

    constructor(props) {
        super();
        
    }

    tryToRememberPassword = (event) =>{
        event.preventDefault();
        const emailForgot = document.getElementById('emailForgot').value;

        if(validateEmail(emailForgot)===true){
            if(checkIfExists(emailForgot)===true){
              document.getElementById('errorMsgForgot').innerHTML='';
              /* Send link to the client */
            }
            else{
                document.getElementById('errorMsgForgot').innerHTML='You are not registered. Please Sign Up.';
            }
        }
        else{
            document.getElementById('errorMsgForgot').innerHTML='Invalid Email address.';
        }

    }

    render(){
      return(
      <div className = 'formBox mt5 center br3 shadow-2 ba bw2 w-50'>
        <form onSubmit={this.tryToRememberPassword}>
          <h1 className='f2'>Forgot your password?</h1>
          <h1 className='f4'>No problem, we can restore it.</h1>
          
          <InputEmail id="emailForgot" />
          <SubmitBtn text="Send" />
          <Link
            className='ma2 link no-underline text1 pointer dark-blue ma2 center'
            to='/'>
              Remember your password? Sign In!
          </Link>

          
          <ErrorMsg id='errorMsgForgot' />
          
        </form>
      </div>
      );
    }
}

export default ForgotPassword;