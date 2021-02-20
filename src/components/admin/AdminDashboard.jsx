import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import './AdminDashboard.css';

export default class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        const token=localStorage.getItem("token");
        let loggedIn=true;
        if(token==null){
            loggedIn=false;
        }
        this.state={
            loggedIn
        }
    }
    
    render() {
        if(this.state.loggedIn===false){
            return <Redirect to="/admin/login"/>
        }
        const logout=e=>{
            localStorage.removeItem("token");
            this.setState({
              loggedIn:false
            });
          }
        return (
            <div>
                <div className="div">
                <ul id="sidebar">
                    <li><Link to="/show/employee">Show Employees</Link></li>
                    <br/>
                     <li><Link to="/employee">Add Employees</Link></li>
                    <br/>
                    <li><Link to="/admin">Registered Students</Link></li>
                    <br/>
                    <li><Link to="/request">Requests</Link></li>
                    <br/>
                    <li><Link to="/room">Add Rooms</Link></li>
                    <br/>
                    <li><button type="button" onClick={logout}>Logout</button></li>
                </ul>
                </div>
            </div>
        )
    }
}
