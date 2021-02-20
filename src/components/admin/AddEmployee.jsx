import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import {Redirect} from 'react-router-dom';
import AdminDashboard from './AdminDashboard.jsx';
import './AddEmployee.css';

export default class Employee extends Component {
  constructor(props) {
    super(props);
    const token=localStorage.getItem("token");
    let loggedIn=true;
    if(token==null){
        loggedIn=false;
    }

    this.state = {
      name: "",
      phoneNo: "",
      type: "",
      dateOfBirth: null,
      address: "",
      salary: "",
      cnic: "",
      loggedIn
    };
  }

  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  onChangeAddress = e => {
    this.setState({
      address: e.target.value
    });
  };
  onChangePhoneNo = e => {
    this.setState({
      phoneNo: e.target.value
    });
  };
  onChangeType = e => {
    this.setState({
      type: e.target.value
    });
  };
  onChangeDateOfBirth = date => {
    this.setState({
      dateOfBirth: date
    });
  };
  onChangeSalary = e => {
    this.setState({
      salary: e.target.value
    });
  };
  onChangeCnic = e => {
    this.setState({
      cnic: e.target.value
    });
  };
  onClick = e => {
    e.preventDefault();
    const employee = {
      name: this.state.name,
      phoneNo: this.state.phoneNo,
      type: this.state.type,
      dateOfBirth: this.state.dateOfBirth,
      address: this.state.address,
      salary: this.state.salary,
      cnic: this.state.cnic
    };
    console.log(employee);
    axios.post("http://localhost:5000/hostel/employee",employee);
  };

  render() {
    if(this.state.loggedIn===false){
      return (<Redirect to="/admin/login"/>);
    }
    return (
      <div className="employee">
        <AdminDashboard/>
        <form action=""id="employee-form">
          <label htmlFor=""style={{fontSize:"25px",fontFamily:"italic",fontWeight:"bold"}}>Add Employee</label>
          <br/> <br/>
          <label htmlFor="">Name:</label>
          <br />
          <input type="text" name="name" id="" onChange={this.onChangeName} />
          <br />
          <label htmlFor="">Phone No:</label>
          <br />
          <input
            type="text"
            name="phoneNo"
            id=""
            onChange={this.onChangePhoneNo}
          />
          <br />
          <label htmlFor="">CNIC:</label>
          <br />
          <input type="text" name="cnic" id="" onChange={this.onChangeCnic} />
          <br />
          <label htmlFor="">Designation:</label>
          <br />
          <select name="type" id="" onChange={this.onChangeType}>
            <option value="">---Option---</option>
            <option value="Security Guard">Security Guard</option>
            <option value="Chef">Chef</option>
            <option value="Sweeper">Sweeper</option>
            <option value="Manager">Manager</option>
          </select>
          <br />
          <label htmlFor="">Date Of Birth:</label>
          <br />
          <DatePicker
            selected={this.state.dateOfBirth}
            onChange={this.onChangeDateOfBirth}
          />
          <br />
          <label htmlFor="">Address:</label>
          <br />
          <input
            type="text"
            name="address"
            id=""
            onChange={this.onChangeAddress}
          />
          <br />
          <label htmlFor="">Salary:</label>
          <br />
          <input
            type="text"
            name="salary"
            id=""
            onChange={this.onChangeSalary}
          />
          <br /> <br />
          <button className="btn btn-primary" onClick={this.onClick}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
