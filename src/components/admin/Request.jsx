import React, { Component } from 'react'
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import AdminDashboard from './AdminDashboard.jsx';


export default class Request extends Component {
    constructor(props) {
        super(props);
        const token=localStorage.getItem("token");
        let loggedIn=true;
        if(token==null){
            loggedIn=false;
        }
    
        this.state = {
             req:[],
             loggedIn
        }
    }
    componentWillMount(){
        axios.get("http://localhost:5000/hostel/request")
        .then(res=>{
            if(res.data.name!==""){
                this.setState({
                    req:res.data
                });
            }
        });
    }
    handleStatus=(id,counter)=>{

      if(counter>0){
        --counter;
      axios.put('http://localhost:5000/hostel/status/'+id+'/Available/'+counter);
      }
      else {
        axios.put('http://localhost:5000/hostel/status/'+id+'/Booked/'+counter);
      }
    
    }
    
    render() {
      if(this.state.loggedIn===false){
        return (<Redirect to="/admin/login"/>);
      }
        let record = this.state.req.map((req, key) => {
          if(req.name!==""){
          if(req.counter===0){
           return( <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{req.roomNo}</td>
                <td>{req.utilities}</td>
                <td>{req.bed}</td>
                <td>{req.counter}</td>
                <td>{req.name}</td>
            <td>{req.status}</td>
        <td><input type="radio" value="Booked" disabled checked/></td>
              </tr>)
          }
            return (
              <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{req.roomNo}</td>
                <td>{req.utilities}</td>
            <td>{req.bed}</td>
          <td>{req.counter}</td>
            <td>{req.name}</td>
            <td>{req.status}</td>
        <td><input type="radio" value="Booked" onChange={()=>this.handleStatus(req._id,req.counter)}/></td>
              </tr>
              );
            }
            return null;
        });
        return (
          <div>
            <AdminDashboard/>
    <table className="table table-dark" id="show-table">
          <thead>
            <tr id="row">
              <th scope="col">#</th>
              <th scope="col">Room No</th>
              <th scope="col">Utilities</th>
              <th scope="col">Total Beds</th>
              <th scope="col">Available Beds</th>
              <th scope="col">Requested By</th>
              <th scope="col">Status</th>
              <th scope="col">Approve</th>
            </tr>
          </thead>
        <tbody>{record}</tbody>
        </table>
          </div>
        )
    }
}
