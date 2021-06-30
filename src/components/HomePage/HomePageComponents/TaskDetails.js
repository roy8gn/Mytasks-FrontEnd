import React from 'react';
import {RiDeleteBinLine} from 'react-icons/ri';
import {ImCheckmark2} from 'react-icons/im';
import {FiEdit} from 'react-icons/fi';
import './PageStyle.css'

class TaskDetails extends React.Component {

  constructor(props) {
    super();
  }

  changeStatusOfTask = (event) => {
    this.props.onChangeStatusOfTask(this.props.id);
  }

  deleteTask = (event) => {
    this.props.onDeleteTask(this.props.id);
  }

  editTask = (event) => {
    this.props.setEditable()
  }

  render(){
    return(
      <div className="br3 ba bw1 dark-gray b--black-20 center shadow-4 flex flex-wrap mb1">

        <div className="pa2 ma2 w-20">
          <label>{this.props.name}</label>
        </div>

        <div className="pa2 ma2 w-20">
          <label>{this.props.date}</label>
        </div>

        <div className="pa2 ma2 w-10">
          <label>{this.props.time}</label>
        </div>

        <div className="flex flex-wrap w-30 pa3 mr3">
          <div className="br-pill ba bw1 pa2 button shadow-1 mr2 bg-green pointer"><ImCheckmark2 onClick={this.changeStatusOfTask} /></div>
          <div className="br-pill ba bw1 pa2 button shadow-1 mr2 bg-yellow pointer" onClick={this.editTask}><FiEdit /></div>
          <div className="br-pill ba bw1 pa2 button shadow-1 mr3 bg-red pointer" onClick={this.deleteTask}><RiDeleteBinLine /></div>
        </div>

      </div>
    );
  }
}

export default TaskDetails;