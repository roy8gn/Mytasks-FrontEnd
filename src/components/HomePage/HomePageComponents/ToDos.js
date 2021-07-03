import React from 'react';
import TaskList from './TaskList';

class ToDos extends React.Component{
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
       <TaskList listName="To Do List" 
        userID={this.props.userID} 
        taskList={this.props.todosDB} 
        onHasChanged={this.onHasChanged} 
        taskType='toDo'
      />
      </div>
    );
  }
}
  
  export default ToDos;