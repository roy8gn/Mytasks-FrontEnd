import React from 'react';
import './FormStyle.css';

class ErrorMsg extends React.Component {

  constructor(props) {
    super();
  }

  render(){
    return(
        <div className='ma2'>
            <p id={this.props.id} className='red ma2'></p>
        </div>
    );
  }
}

export default ErrorMsg;