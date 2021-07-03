import React from 'react';
import TaskList from './TaskList';

class Events extends React.Component{
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
        <TaskList listName="Events"
         taskList={this.props.eventsDB}
          onHasChanged={this.onHasChanged} 
          taskType='event' 
          userID={this.props.userID}
        />
       </div>
    );
  }
}
  
export default Events;