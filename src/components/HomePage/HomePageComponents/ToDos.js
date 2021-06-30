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
       <TaskList listName="To Do List" taskList={this.props.todosDB} onHasChanged={this.onHasChanged} taskType='task'/>
      </div>
    );
  }
}
  
  export default ToDos;