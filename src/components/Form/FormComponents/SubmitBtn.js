import React from 'react';
import './FormStyle.css';

class SubmitBtn extends React.Component {

  constructor(props) {
    super();
  }

  render(){
    return(
        <div className='ma2'>
            <input className='pt1 pb1 pl3 pr3 shadow-2 b--black br4 button ma3 f4 grow ba bw1' type='submit' value={this.props.text}/>
          </div>
    );
  }
}

export default SubmitBtn;