import React from 'react';
import './FormStyle.css';
import { HiOutlineMail } from 'react-icons/hi';

class InputEmail extends React.Component {

    constructor(props) {
      super();
    }

    render(){
        return (
            <div className='ma2 logo center'>
                <HiOutlineMail className='pr2' size={30}/>
                <input 
                    id={this.props.id}
                    className='ba pa1 br2 b--black text1'
                    type="text"
                    placeholder="Email"
                    onChange={this.props.onChangeEmail}
                />
            </div>
        );
    }
}

export default InputEmail;