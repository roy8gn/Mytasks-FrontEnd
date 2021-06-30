import React from 'react';
import Tilt from 'react-tilt';
import './Top.css';
import taskLogo from './task-logo.png';


const Logo = () => {
    return (
        <div className='w-100 pa2 ba bw1 flex containorTop'>
            <Tilt className="Tilt br2 shadow-2 w-5 ba bw1" options={{ max : 25 }} style={{ height: 90, width: 90 }} >
                <div className="Tilt-inner pa2">
                    <img alt='logo' src={taskLogo}/>
                </div> 
            </Tilt>
            <div className = 'w-95 pa1 pl3'>
                <h1 className='black'>MyTasks</h1>
            </div>
        </div>
    );
}

export default Logo;