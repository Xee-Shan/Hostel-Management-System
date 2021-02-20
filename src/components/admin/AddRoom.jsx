import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
export default class Room extends Component {
    constructor(props) {
        super(props);
        const token=localStorage.getItem("token");
        let loggedIn=true;
        if(token==null){
            loggedIn=false;
        }
    
        this.state = {
             roomNo:'',
             utilities:'',
             price:'',
             status:'',
             bed:0,
             loggedIn
        }
    }
    handleRoomNo=e=>{
        this.setState({
            roomNo:e.target.value
        });
    }
    handleUtilities=e=>{
        this.setState({
            utilities:e.target.value
        });
    }
    
    handlePrice=e=>{
        this.setState({
            price:e.target.value
        });
    }
    
    handleStatus=e=>{
        this.setState({
            status:e.target.value
        });
    }
    handleBed=e=>{
        this.setState({
            bed:e.target.value
        });
    }
    
    handleClick=e=>{
        e.preventDefault();
        const room={
            roomNo:this.state.roomNo,
            price:this.state.price,
            utilities:this.state.utilities,
            status:this.state.status,
            bed:this.state.bed
        };
        axios.post('http://localhost:5000/hostel/room',room);
        window.location.reload();
    }
    render() {
        if(this.state.loggedIn===false){
            return (<Redirect to="/admin/login"/>);
          }
        return (
            <div>
                <AdminDashboard/>
                <form action=""id="employee-form">
                <label htmlFor=""style={{fontSize:"25px",fontFamily:"italic",fontWeight:"bold"}}>Add Room</label>
                <br/> <br/>
          <label htmlFor="">Room No:</label>
          <br />
          <input type="text" name="roomNo" id="" onChange={this.handleRoomNo} />
          <br />
          <label htmlFor="">Type Utitlities:</label>
          <br />
          <input type="text" name="utilities" id="" onChange={this.handleUtilities} />
          <br />
          <label htmlFor="">Price:</label>
          <br />
          <input type="text" name="price" id="" onChange={this.handlePrice} />
          <br/>
          <label htmlFor="">No. of Bed(s):</label>
          <br />
          <input type="text" name="bed" id="" onChange={this.handleBed} />
          <br />
          <label htmlFor="">Status:</label>
          <br />
        <input type="radio"name="isBooked"value="Available"onChange={this.handleStatus}/>{"  "}Available{"    "}
        <input type="radio"name="isBooked"value="Booked"onChange={this.handleStatus}/>{" "}Booked
          <br />
          <button type="button" className="btn btn-primary"onClick={this.handleClick}>Submit</button>
          </form>
            </div>
        )
    }
}
