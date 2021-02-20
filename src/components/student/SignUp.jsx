import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./SignUp.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      nameError: '',
      regNo: "",
      regNoError: '',
      email: "",
      emailError: '',
      password: "",
      passwordError: '',
      phoneNo: "",
      phoneNoError: "",
      parentPhoneNo: "",
      parentPhoneNoError: '',
      dateOfBirth: null,
      dateOfBirthError: '',
      address: "",
      addressError: ''
    };
  }
  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  onChangeRegNo = e => {
    this.setState({
      regNo: e.target.value
    });
  };
  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  onChangePhoneNo = e => {
    this.setState({
      phoneNo: e.target.value
    });
  };
  onChangeParentPhoneNo = e => {
    this.setState({
      parentPhoneNo: e.target.value
    });
  };

  onChangeAddress = e => {
    this.setState({
      address: e.target.value
    });
  };
  onChangeDateOfBirth = date => {
    this.setState({
      dateOfBirth: date
    });
  };

  validate = () => {
    let isError = false;
    if (this.state.name === "") {
      this.setState({
        nameError: "Can not be empty"
      });
      isError = true;
    }
    /*if(this.state.password.length<5){
      this.setState({
        passwordError:"Password strength low"
      });
      isError=true;
    }*/
    if (this.state.password === "") {
      this.setState({
        passwordError: "Can not be empty"
      });
      isError = true;
    }
    if (this.state.regNo === "") {
      this.setState({
        regNoError: "Can not be empty"
      });
      isError = true;
    }
    if (this.state.email === "") {
      this.setState({
        emailError: "Can not be empty"
      });
      isError = true;
    }
    else if (!this.state.email.includes("@")) {
      this.setState({
        emailError: "Invalid Email"
      });
      isError = true;
    }
    if (this.state.phoneNo === "") {
      this.setState({
        phoneNoError: "Can not be empty"
      });
      isError = true;
    }
    if (!(this.state.phoneNo.match("[0-9]+"))) {
      this.setState({
        phoneNoError: "Can not be empty"
      });
      isError = true;
    }
    if (this.state.parentPhoneNo === "") {
      this.setState({
        parentPhoneNoError: "Can not be empty"
      });
      isError = true;
    }
    if (this.state.address === "") {
      this.setState({
        addressError: "Can not be empty"
      });
      isError = true;
    }
    return isError;
  }

  onClick = e => {
    e.preventDefault();
    const err = this.validate();
    if (err === false) {

      this.setState({
        nameError: "",
        regNoError: "",
        emailError: "",
        passwordError: "",
        phoneNoError: "",
        parentPhoneNoError: "",
        addressError: ""
      });
      const student = {
        name: this.state.name,
        regNo: this.state.regNo,
        email: this.state.email,
        password: this.state.password,
        phoneNo: this.state.phoneNo,
        parentPhoneNo: this.state.parentPhoneNo,
        dateOfBirth: this.state.dateOfBirth,
        address: this.state.address
      };
      axios.post("http://localhost:5000/hostel/create", student);
      window.location.href = "http://localhost:3000/student/login";
    }
  };
  render() {
    return (
      <div className="signup">
        <form id="content">
          <br />
          <label htmlFor="">Name: </label>
          <br />
          <input type="text" name="name" id="" onChange={this.onChangeName} />
          <br />
          <small style={{ fontSize: 15, color: "red" }}>{this.state.nameError}</small>
          <br />
          <label htmlFor="">Student ID: </label>
          <br />
          <input type="text" name="regNo" id="" onChange={this.onChangeRegNo} />
          <br />
          <small style={{ fontSize: 15, color: "red" }}>{this.state.regNoError}</small>
          <br />
          <label htmlFor="">Email: </label>
          <br />
          <input type="text" name="email" id="" onChange={this.onChangeEmail} />
          <br />
          <small style={{ fontSize: 15, color: "red" }}>{this.state.emailError}</small>
          <br />
          <label htmlFor="">Password: </label>
          <br />
          <input
            type="password"
            name="password"
            id=""
            onChange={this.onChangePassword}

          />
          <br />
          <small style={{ fontSize: 15, color: "red" }}>{this.state.passwordError}</small>
          <br />
          <label htmlFor="">Phone No: </label>
          <br />
          <input
            type="text"
            name="phoneNo"
            id=""
            onChange={this.onChangePhoneNo}
          />
          <br />
          <small style={{ fontSize: 15, color: "red" }}>{this.state.phoneNoError}</small>
          <br />
          <label htmlFor="">Parent/Guardian PhoneNo: </label>
          <br />
          <input
            type="text"
            name="parentPhoneNo"
            id=""
            onChange={this.onChangeParentPhoneNo}
          />
          <br />
          <small style={{ fontSize: 15, color: "red" }}>{this.state.parentPhoneNoError}</small>
          <br />
          <label htmlFor="">Date of Birth: </label>
          <br />
          <div id="date">
            <DatePicker
              selected={this.state.dateOfBirth}
              onChange={this.onChangeDateOfBirth}
            />
          </div>
          <br />
          <label htmlFor="">Permanent Address: </label>
          <br />
          <input
            type="text"
            name="address"
            id=""
            onChange={this.onChangeAddress}
          />
          <br />
          <small style={{ fontSize: 15, color: "red" }}>{this.state.addressError}</small>
          <br />
          <button
            id="submit"
            type="submit"
            className="btn btn-primary"
            onClick={this.onClick}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
