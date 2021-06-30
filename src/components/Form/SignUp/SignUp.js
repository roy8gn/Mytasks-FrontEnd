import React from 'react';
import '../FormComponents/FormStyle.css';
import SignUpForm from './SignUpForm';
import SignedUp from './SignedUp';

class SignUp extends React.Component {

  constructor(props) {
    super();
    this.state = {
      isSignedUp: false,
    }
  }

  onSignUp = () => {
    this.setState({isSignedUp:true})
  }

  showComponent(){
    if(this.state.isSignedUp){
      return <SignedUp />
    }
    return <SignUpForm onSignUp={this.onSignUp} />
  }

  render(){
      return(
      <div className = 'formBox mt5 center br3 shadow-2 ba bw2 w-50 flex flex-column'>
          <h1 className='f2'>Sign Up</h1>
          {this.showComponent()}
      </div>
      );
    }
}

export default SignUp;