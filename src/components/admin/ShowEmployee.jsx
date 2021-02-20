import React, { Component } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom';
import AdminDashboard from './AdminDashboard.jsx';
import './ShowEmployee.css';
export default class ShowEmployee extends Component {
  constructor(props) {
    super(props);
    const token=localStorage.getItem("token");
    let loggedIn=true;
    if(token==null){
        loggedIn=false;
    }

    this.state = {
      arr: [],
      loggedIn
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/hostel/show/employee").then(res => {
      this.setState({
        arr: res.data
      });
    });
  }
  handleClick = id => {
    axios.delete("http://localhost:5000/hostel/employee/" + id).then(res => {
      const newArr = this.state.arr.filter(obj => {
        return obj._id !== res.data._id;
      });
      this.setState({
        arr: newArr
      });
    });
  };
  render() {
    if(this.state.loggedIn===false){
      return (<Redirect to="/admin/login"/>);
    }
    const record = this.state.arr.map((item, key) => {
      return (
        <tr key={key}>
          <th scope="row">{key + 1}</th>
          <td>{item.name}</td>
          <td>{item.phoneNo}</td>
          <td>{item.cnic}</td>
          <td>{item.dateOfBirth}</td>
          <td>{item.type}</td>
          <td>{item.dateOfJoining}</td>
          <td>{item.address}</td>
          <td>{item.salary}</td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.handleClick(item._id)}
            >
              Delete
            </button>{" "}
          </td>
        </tr>
      );
    });
    return (
      <div>
        <AdminDashboard/>
        <table className="table table-dark" id="show-table">
          <thead>
            <tr id="row">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone No</th>
              <th scope="col">CNIC</th>
              <th scope="col">Date Of Birth</th>
              <th scope="col">Designation</th>
              <th scope="col">Date Of joining</th>
              <th scope="col">Address</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{record}</tbody>
        </table>
      </div>
    );
  }
}
