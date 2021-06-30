import React from 'react';
import './FormStyle.css';
import { Link } from 'react-router-dom';  
class FormLink extends React.Component {

  constructor(props) {
    super();
  }

  

  render(){
    return(
        <div className='ma2 link no-underline text1 pointer dark-blue'>
            <Link  to='/forgotPassword'>Forgot Password?</Link>
          </div>
    );
  }
}

export default FormLink;