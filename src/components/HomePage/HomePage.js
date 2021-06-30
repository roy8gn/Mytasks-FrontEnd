import React from 'react';
import Navbar from './SideBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToDos from './HomePageComponents/ToDos';
import Events from './HomePageComponents/Events';
import Meetings from './HomePageComponents/Meetings';
import Projects from './HomePageComponents/Projects';
import About from './HomePageComponents/About';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        
    }

    

    render(){
        return(
            <div>
                <Router>
                    <Navbar onSignOut={this.props.onSignOut} userName={this.props.user.userName} />
                    <Switch>
                    
                    <Route exact path='/toDos'>
                        <ToDos todosDB={this.props.user.toDos} userID={this.props.user._id}/>
                    </Route>
                    
                    <Route exact path='/about'>
                        <About />
                    </Route>

                    <Route exact path='/events'>
                        <Events eventsDB={this.props.user.events} userID={this.props.user._id}/>
                    </Route>

                    <Route exact path='/projects'>
                        <Projects projectsDB={this.props.user.projects} userID={this.props.user._id}/>
                    </Route>

                    <Route exact path='/meetings'>
                        <Meetings meetingsDB={this.props.user.meetings} userID={this.props.user._id}/>
                    </Route>
                    
                    <Route exact path='/' >
                    </Route>
                    </Switch>
                </Router>
            </div>
        );
        
    }
}

export default HomePage;