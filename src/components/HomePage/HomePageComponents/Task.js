import React from 'react';
import TaskDetails from './TaskDetails';
import EditableTask from './EditableTask';

class Task extends React.Component {

  constructor(props) {
    super();
    this.state = {
      editable: false
    }
  }

  setEditable = () => {
    if(this.state.editable===false) this.setState({editable: true})
    else this.setState({editable: false})
    console.log(this.state.editable)
  }

  showTask = () => {
    if(this.state.editable===true){
      return <EditableTask 
        id={this.props.id}
        name={this.props.name}
        date={this.props.date}
        time={this.props.time}
        onEditTask={this.props.onEditTask}
        setEditable={this.setEditable}
        taskType={this.props.taskType}
        userID={this.props.userID}
      />
    }
    else{

      return <TaskDetails 
        id={this.props.id}
        name={this.props.name}
        date={this.props.date}
        time={this.props.time}
        onHasChanged={this.props.onHasChanged}
        setEditable={this.setEditable}
        onDeleteTask={this.props.onDeleteTask}
        onChangeStatusOfTask={this.props.onChangeStatusOfTask}
        taskType={this.props.taskType}
        userID={this.props.userID}
      />
    }
  }

  render(){
    return(
      <div>

        {this.showTask()}

      </div>
    );
  }
}

export default Task;