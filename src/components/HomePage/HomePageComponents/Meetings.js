import React from 'react';
import TaskList from './TaskList';

class Meetings extends React.Component{
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
            <TaskList listName="Meetings" 
              taskList={this.props.meetingsDB} 
              onHasChanged={this.onHasChanged} 
              taskType='meeting'
              userID={this.props.userID}
            />
       </div>
    );
  }
}
  
export default Meetings;