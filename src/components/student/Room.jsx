import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import './Room.css';
import StudentDashboard from './StudentDashboard.jsx';

export default class ShowRoom extends Component {
  constructor(props) {
    super(props);
    const token=localStorage.getItem("token2");
    let loggedIn=true;
    if(token==null){
      loggedIn=false;
    }
    this.state = {
       obj:[],
       loggedIn,
    }
  }
    componentDidMount(){
        axios.get('http://localhost:5000/hostel/room/show')
        .then(res=>{
            this.setState({
              obj:res.data
            });

        });
    }
    handleClick=(id)=>{

      axios.put('http://localhost:5000/hostel/update/'+id+'/'+localStorage.getItem("name"));
      
    }
    render() {
      if(this.state.loggedIn===false){
        return <Redirect to="/student/login"/>
      }
      
      const record = this.state.obj.map((obj, key) => {
          if(obj.counter===0){return (
          <tr key={key} style={{backgroundColor:"red"}}>
            <th scope="row">{key + 1}</th>
            <td>{obj.roomNo}</td>
            <td>{obj.utilities}</td>
          <td>{obj.bed}</td>
            <td>{obj.price}</td>
          <td>{obj.status}</td>
          <td>{obj.name}</td>
          </tr>
          );}
      if(!obj.name.includes(localStorage.getItem("name"))){
          return(<tr key={key} style={{backgroundColor:"green"}}>
          <th scope="row">{key + 1}</th>
          <td>{obj.roomNo}</td>
          <td>{obj.utilities}</td>
          <td>{obj.bed}</td>
          <td>{obj.price}</td>
        <td>{obj.status}</td>
        <td><button type="button" className="btn btn-primary"onClick={()=>
          {
            this.handleClick(obj._id);
            window.location.reload();
          }}>Send Request</button></td>
        </tr>);
      }
  else{
        return(<tr key={key} style={{backgroundColor:"yellow"}}>
        <th scope="row">{key + 1}</th>
        <td>{obj.roomNo}</td>
        <td>{obj.utilities}</td>
        <td>{obj.bed}</td>
        <td>{obj.price}</td>
      <td>{obj.status}</td>
      <td>Pending...</td>
      </tr>
      );
  }
      });
    
        return (
            <div>
              <StudentDashboard/>
                  <table className="table table-dark" id="room">
          <thead>
            <tr id="row">
              <th scope="col">#</th>
              <th scope="col">Room No</th>
              <th scope="col">Utilities</th>
              <th scope="col">Total Beds</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Reservation</th>
            </tr>
          </thead>
        <tbody>{record}</tbody>
        </table>
            </div>
        )
    }
}
