import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Switch,Route } from "react-router-dom";
import SignUp from './components/student/SignUp.jsx';
import RegisteredStudent from './components/admin/RegisteredStudent.jsx';
import AdminLogin from './components/admin/AdminLogin.jsx';
import AddEmployee from './components/admin/AddEmployee.jsx';
import ShowEmployee from './components/admin/ShowEmployee.jsx';
import AddRoom from './components/admin/AddRoom.jsx';
import Room from './components/student/Room.jsx';
import Request from './components/admin/Request.jsx';
import AdminDashboard from './components/admin/AdminDashboard.jsx';
import StudentLogin from './components/student/StudentLogin.jsx';
import StudentDashboard from './components/student/StudentDashboard.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
        <Route exact path="/admin/login" component={AdminLogin}/>
     <Route exact path="/show/employee" component={ShowEmployee}/>
     <Route exact path="/employee" component={AddEmployee}/>
      <Route path="/signup"component={SignUp}/>
     <Route  exact path='/admin' component={RegisteredStudent}/>
     <Route exact path='/room' component={AddRoom}/>
     <Route  exact path='/show/room' component={Room}/>
     <Route exact path='/request' component={Request}/>
     <Route exact path="/admin/dashboard"component={AdminDashboard}/>
     <Route exact path="/student/login" component={StudentLogin}/>
     <Route exact path="/student/dashboard" component={StudentDashboard}/>
     <Route path="/" component={Home}/>
     <Route path="/about"component={About}/>
     <Route path="/contact"component={Contact}/>
     </Switch>
      </div>
    );
  }
}
