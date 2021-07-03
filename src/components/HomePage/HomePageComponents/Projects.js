import React from 'react';
import TaskList from './TaskList';

class Projects extends React.Component{
    constructor(props){
      super(props)
      this.state={
        hasChanged: false
      }
    }
  
    onHasChanged = () => {
      this.setState({hasChanged: true})
      this.setState({hasChanged: false})
    }
  
    render(){
        return (
            <div>
                <TaskList 
                listName="Projects" 
                taskList={this.props.projectsDB} 
                onHasChanged={this.onHasChanged} 
                taskType='project'
                userID={this.props.userID}
                />
        </div>
        );
    }
}
  
  export default Projects;
