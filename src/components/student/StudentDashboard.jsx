import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import './StudentDashboard.css';


export default class StudentDashboard extends Component {
    constructor(props) {
        super(props)
    const token=localStorage.getItem("token2");
        let loggedIn=true;
        if(token==null){
            loggedIn=false;
        }
    this.state = {
             loggedIn
        }
    }
    render() {
        if(!this.state.loggedIn){
          return <Redirect to="/student/login"/>
        }
        const logout=e=>{
            localStorage.removeItem("name");
            localStorage.removeItem("token2");
            this.setState({
                loggedIn:false
            });
        }
        return (
            <div className="dashboard">
            <ul id="sidebar">
                <li><Link to="/show/room">Show Room</Link></li>
                <br/>
                <li><button type="button" onClick={logout}>Logout</button></li>
            </ul>
        </div>
        )
    }
}
