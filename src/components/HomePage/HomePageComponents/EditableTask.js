import React from 'react';
import {BiSave} from 'react-icons/bi'
import ReactTooltip from 'react-tooltip';
import './PageStyle.css'

class EditableTask extends React.Component {

  constructor(props) {
    super();
    this.state = {
        taskName: '',
        taskDate: '',
        taskTime: '',
        alertShow: false,
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

  saveChangesOfTask = () => {
    if(!this.state.taskDate || !this.state.taskName || !this.state.taskTime){
      this.setState({alertShow: true})
      return;
    }  
    this.setState({alertShow: false})
    this.props.onEditTask(this.props.id, this.state.taskName, this.state.taskDate, this.state.taskTime)
    this.props.setEditable()

  }

  showAlert = () => {
    if(this.state.alertShow===true){
        return(
            <div className='w-100 center'>
                <p className='red f4 center code'>You must fill all the details!</p>
            </div>
            
        )
    }
    else{
        return(
            <p></p>
        )
    }
  }

  render(){
    return(
      <div className="br3 ba bw1 dark-gray b--black-20 center shadow-4 flex flex-wrap mb1 pv3">
        <ReactTooltip/>
        <input type='text' className='mh2 ph2' placeholder={this.props.name} onChange={this.onChangeTaskNameChange} />
        <input type='date' className='mh2 ph2' placeholder={this.props.date} onChange={this.onSelectDate} data-tip="Due Date"/>
        <input type="time" className='mh2 ph2' placeholder={this.props.time} onChange={this.onSelectTime} data-tip="Due Time" />
       
        <div className="br-pill ba bw1 pa2 white b--black button shadow-1 mr3 bg-blue pointer flex" onClick={this.saveChangesOfTask}>
            <BiSave className='f4'/>
        </div>
        {this.showAlert()}

      </div>
    );
  }
}

export default EditableTask;