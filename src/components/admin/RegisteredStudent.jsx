import React, { Component } from "react";
import axios from "axios";
import './RegisteredStudent.css';
import {Redirect} from 'react-router-dom';
import AdminDashboard from './AdminDashboard.jsx';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    const token=localStorage.getItem("token");
    let loggedIn=true;
   if(token==null){
     loggedIn=false
   }
    this.state = {
      obj: [],
      loggedIn
    };
  }

  handleDelete = id => {
    axios
      .delete("http://localhost:5000/hostel/admin/delete/" + id)
      .then(res => {
        const newObj = this.state.obj.filter(item => {
          return item._id !== res.data._id;
        });
        this.setState({
          obj: newObj
        });
      });
  };

  componentDidMount() {
    axios.get("http://localhost:5000/hostel/admin").then(res => {
      this.setState({
        obj: res.data
      });
    });

  }
  
  render() {
    if(this.state.loggedIn===false){
      return (<Redirect to="/admin/login"/>);
    }
    const record = this.state.obj.map((obj, key) => {
      return (
        <tr key={key}>
          <th scope="row">{key + 1}</th>
          <td>{obj.name}</td>
          <td>{obj.regNo}</td>
          <td>{obj.email}</td>
          <td>{obj.phoneNo}</td>
      <td>{obj.parentPhoneNo}</td>
      <td>{obj.dateOfBirth}</td>
    <td>{obj.address}</td>
    <td><button type="button" className="btn btn-danger"onClick={()=>this.handleDelete(obj._id)}>Delete</button></td>
        </tr>
      );
    });
    return (      
      <div id="admin">
        <AdminDashboard/>
        <table className="table table-dark" id="table">
          <thead>
            <tr id="row" className="theader">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Reg No</th>
              <th scope="col">Email</th>
              <th scope="col">Contact No</th>
              <th scope="col">Parent Contact No</th>
              <th scope="col">Birth Date</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{record}</tbody>
        </table>
      </div>
    );
  }
}
