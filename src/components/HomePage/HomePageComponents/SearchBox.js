import React from 'react';
import './PageStyle.css';

class SearchBox extends React.Component{
    constructor(props){
        super(props)
    }

    onChangeValue = (event) => {
        this.props.onChangeSortType(event.target.value)
        console.log(event.target.value)
    }

    render(){
        return (
            <div className='pa2 center mv2 flex flex-wrap'>
                <input
                    className='mh2 pa2 mb2 ba bw1' 
                    type='search'
                    placeholder={'Search '+ this.props.taskType +'s here'}
                    onChange={this.props.searchChange}
                />
                
                <div className='f5 flex flex-wrap'>
                    <label className='mr2'>Sort By:</label>
                    <button className='mr2 ba bw1 br-pill button bg-white' onClick={this.onChangeValue} value='byAlphabet' >Alphabet</button>
                    <button className='mr2 ba bw1 br-pill button bg-white' onClick={this.onChangeValue} value='byDate' >Date</button>
                    <button className='mr2 ba bw1 br-pill button bg-white' onClick={this.onChangeValue} value='byIndex' >Deafult</button>
                </div>
            </div>
        );
    }
}

export default SearchBox;