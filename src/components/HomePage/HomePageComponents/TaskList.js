import React from 'react';
import Task from './Task';
import AddNewTaskPanel from './AddNewTaskPanel';
import SearchBox from './SearchBox';


class TaskList extends React.Component{

    constructor(props){
        super()
        this.state = {
            searchField: ''
        }
    }

    onChangeSortType = (type) =>{
        var list = this.props.taskList
        switch(type){
            
            case 'byAlphabet':
                list.sort((a, b) => (a.name > b.name) ? 1 : -1)
                console.log(list)
                break;
            case 'byIndex':
                list.sort((a, b) => (a.key > b.key) ? 1 : -1)
                break;
            case 'byDate':
                list.sort((a, b) => (a.date > b.date) ? 1 : -1)
                break;    
        }

        this.props.onHasChanged()
    }

    onDeleteTask = (id) => {
        
        const index = this.props.taskList.map(function(x) {return x.key; }).indexOf(id);
        this.props.taskList.splice(index, 1);
        this.props.onHasChanged()
    }

    onEditTask = (id, editedTask, editedDate, editedTime) => {
        const index = this.props.taskList.map(function(x) {return x.key; }).indexOf(id);
        var task = this.props.taskList[index]

        task.name = editedTask
        task.date = editedDate
        task.time = editedTime

        const userID = this.props.userID
        const taskType = this.props.taskType+'s'

        console.log(task)
        console.log("USERid " + userID)
        
        var problemFlag = false
        fetch('http://localhost:3001/'+taskType, {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                  userID: userID,
                  task: task
              }) 
        })
        .then(response => response.json())
        .then(data => {
            if(data.edited===false){
                problemFlag=true
            }
        })
      
        if(problemFlag===true){
              window.alert("Problem")
        }
        else{
            this.props.onHasChanged()
        }
    }

    onChangeStatusOfTask = (id) => { // finish/ongoing 
        const index = this.props.taskList.map(function(x) {return x.key; }).indexOf(id);
        var task = this.props.taskList[index]
        task.finished=!task.finished
        this.props.onHasChanged()
        // Update Server
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    

    render(){
        const filteredTasks =this.props.taskList.filter(task =>{
            return task.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className='ma2 ba bw2 w-50 center bg-white-90 flex flex-column'>
                <h1>{ this.props.listName}</h1>
               
                <AddNewTaskPanel 
                    taskList={ this.props.taskList} 
                    onHasChanged={this.props.onHasChanged} 
                    taskType={this.props.taskType}
                    userID={this.props.userID}
                />
                <SearchBox searchChange={this.onSearchChange} taskType={this.props.taskType} onChangeSortType={this.onChangeSortType}/>
                <h3>On-Going:</h3>
                <div className='mb2 ml2 mr2'>
                {
                    /*this.props.taskList*/filteredTasks.map((task,i) => {
                        if(task.finished===false){
                            return(
                                <Task
                                    key={task.key}
                                    id={task.key}
                                    name={task.name}
                                    date={task.date}
                                    time={task.time}
                                    onDeleteTask={this.onDeleteTask}
                                    onEditTask={this.onEditTask}
                                    onChangeStatusOfTask={this.onChangeStatusOfTask}
                                    taskType={this.props.taskType}
                                    userID={this.props.userID}
                                />
                            )
                        }
                
                    })
                }
                </div>

                <div>
                    <h3>Finished:</h3>
                    <div className='mb2 ml2 mr2 strike'>
                    {
                    /*this.props.taskList*/filteredTasks.map((task,i) => {
                        if(task.finished===true){
                            return(
                                <Task
                                    key={task.key}
                                    id={task.key}
                                    name={task.name}
                                    date={task.date}
                                    time={task.time}
                                    onDeleteTask={this.onDeleteTask}
                                    onEditTask={this.onEditTask}
                                    onChangeStatusOfTask={this.onChangeStatusOfTask}
                                />
                            )
                        }
                
                    })
                }
                </div>
                </div>
            </div>
        );
    }
}
    
export default TaskList;