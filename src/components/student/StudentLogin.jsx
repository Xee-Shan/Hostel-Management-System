import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import './StudentLogin.css';


export default class StudentLogin extends Component {
    constructor(props) {
        super(props)
    let loggedIn=false;
        this.state = {
             email:'',
             password:'',
             obj:[],
             loggedIn,
        }
    }   
   name=null;
    handleEmail=e=>{
        this.setState({
            email:e.target.value
        });
    }
    handlePassword=e=>{
        this.setState({
            password:e.target.value
        });
    }
    componentDidMount(){
        axios.get('http://localhost:5000/hostel/show')
        .then(res=>{
            this.setState({
                obj:res.data
            });
        });
    } 
    handleClick=e=>{
        this.state.obj.map(arr=>{
            if(arr.email===this.state.email && arr.password===this.state.password){
               localStorage.setItem("name",arr.name);
                localStorage.setItem("token2","lsk87384:{}");
              this.setState({
                  loggedIn:true
              });
            }
            return null
        });
    }
    render() {
        if(this.state.loggedIn){
            return (            <Redirect to="/student/dashboard"/>);
        }
        return (
            <div className="student">
              <h1>SIGN IN</h1>
           <form action=""className="container">
             <label htmlFor="">Email:</label>
             <br/>
             <input type="text" name="email" id=""onChange={this.handleEmail}/>
             <br/>
             <label htmlFor="">Password:</label>
             <br/>
             <input type="password" name="" id=""onChange={this.handlePassword}/>
             <br/>
             <br/>
             <button className="btn btn-primary"onClick={this.handleClick}>Login</button>

           </form>
            </div>
        );
    }
}
