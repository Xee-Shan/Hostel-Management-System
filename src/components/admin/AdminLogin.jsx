import React, { Component } from 'react'
import './AdminLogin.css';
import Img from './admin.png';
import {Redirect} from 'react-router-dom';

export default class AdminLogin extends Component {
    constructor(props) {
        super(props)
    let loggedIn=false;
        this.state = {
             username:'',
             password:'',
             loggedIn
        }
    }
    handleChangeUsername=e=>{
        this.setState({
            username:e.target.value
        });
    }
    handleChangePassword=e=>{
        this.setState({
            password:e.target.value
        });
    }
    handleClick=e=>{
        e.preventDefault();
        if(this.state.username==="admin"&&this.state.password==="123"){
            localStorage.setItem("token","iojew'r4s5fsd1fd");
            this.setState({
                loggedIn:true
            });
        }
    }
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/admin/dashboard"/>
        }
        return (
            <div className="main">
            <div className="container" id="admin-login">
                <h3>Admin Login</h3>
                <img src={Img} alt=""/>
                <div className="input">
                <input type="text" name="username" id=""placeholder="Username"onChange={this.handleChangeUsername}/>
                <br/> <br/>
                <input type="password" name="password" id="" placeholder='Password'onChange={this.handleChangePassword}/>
                <br/> <br/>
        <button type="button"className="btn btn-warning"id="btn1"onClick={this.handleClick}>Login</button>
            </div>
            </div>
            </div>

        )
    }
}
