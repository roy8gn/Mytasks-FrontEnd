import React from 'react';
import aboutPic from './aboutPic.jpg';

const About = () => {
     
    return(
        <div className='ma2 ba bw2 w-50 center bg-white-90 flex flex-column'>
            <h1>About MyTasks...</h1>
            
            <p>MyTasks is a new Web Application for task managment, give it a try!<br/><br/>
            You can manage your ToDo list, projects, events and meetings.</p>
            <img className="" alt='logo' src={aboutPic}/>    
        </div>
    );
  
}

export default About;