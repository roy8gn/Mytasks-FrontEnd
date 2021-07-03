import React from 'react';
import ReactTooltip from 'react-tooltip';
import './PageStyle.css'
import {AiOutlinePlus} from 'react-icons/ai';
class AddNewTaskPanel extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            taskName: '',
            taskDate: '',
            taskTime: ''
        }
    }

    onChangeTaskNameChange = (event) => {
        this.setState({taskName: event.target.value});
    }
    
    onSelectDate = (event) => {
        this.setState({taskDate: event.target.value});
    }

    onSelectTime = (event) => {
        this.setState({taskTime: event.target.value});
    }

    AddNewTask = (event) => {

        if(!this.state.taskDate || !this.state.taskName || !this.state.taskTime){
            alert('Enter all the datails!')
            return;
        }
        var taskKey = -1;
        if(this.props.taskList.length===0){
            taskKey = 0;
        }
        else{
            taskKey = Math.max.apply(Math, this.props.taskList.map(function(item) { return item.key; })) + 1 // Give a key to the new task
        }

        const newTask = {
            key: taskKey,
            name: this.state.taskName,
            date: this.state.taskDate,
            time: this.state.taskTime,
            finished: false
        }
        const userID = this.props.userID
        const taskType = this.props.taskType.toLowerCase()+'s'
        const problemFlag = false
        fetch('http://localhost:3001/'+taskType, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userID: userID,
                task: newTask
            }) 
        })
            .then(response => response.json())
            .then(data => {
                if(data.added===false){
                    problemFlag=true
                }
            })

        if(problemFlag===true){
            window.alert("Problem")
        }
        else{
            this.props.taskList.push(newTask)
            this.props.onHasChanged()
        }
        
        // Update the Server and DB about adding a new task. 
    }

    render(){
        const taskNote = "Add a new " + this.props.taskType
        return(
            <div className='center mv2 flex flex-wrap'>
                        <ReactTooltip/>
                        <input type='text' className='mh2 ph2' placeholder={taskNote} onChange={this.onChangeTaskNameChange} />
                        <input type='date' className='mh2 ph2' onChange={this.onSelectDate} data-tip="Due Date"/>
                        <input type="time" className='mh2 ph2' onChange={this.onSelectTime} data-tip="Due Time" />
                        
                        <button className="br-pill ml2 b--black white f3 ba bw1 pa2 button shadow-1 mr3 bg-blue pointer" onClick={this.AddNewTask}>
                            <AiOutlinePlus />
                        </button>
            </div>
        );
    }
}

export default AddNewTaskPanel;