import React from 'react';
import './FormStyle.css';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsArrowRepeat } from 'react-icons/bs';


class InputPassword extends React.Component {
    
    constructor(props) {
        super();
        
    }

    chooseIconType = (iconType) => {
        return (iconType==="password") ? 
        <RiLockPasswordLine className='pr2 bg-transparent' size={30}/> : 
        <BsArrowRepeat className='pr2 bg-transparent' size={30}/> ;
    }
    
    
    render(){
        return (
            <div className='ma2 logo center'>
                {this.chooseIconType(this.props.iconType)}
                <input
                    id={this.props.id}
                    className='ba pa1 br2 b--black text1'
                    type="password"
                    placeholder = {this.props.text}
                    onChange = {this.props.onChangePassword}
                />
            </div>
        );
        }
}

export default InputPassword;