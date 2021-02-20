import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { MDBIcon, MDBCol, MDBCard, MDBRow, MDBCardBody } from "mdbreact";
import a from "./Images/a.jpg";
import b from "./Images/b.jpg";
import c from "./Images/c.jpg";
import d from "./Images/d.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">HMS</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/student/login">Login</Nav.Link>
              <Nav.Link href="/signup">Register</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </div>
        <div>
          <header>
            <h1>About us</h1>
          </header>
        </div>
        <div className="container">
          <MDBCard className="my-5 px-5 pb-1 text-center">
            <MDBCardBody>
              <h2 className="h1-responsive font-weight-bold my-5">
                Our amazing team
              </h2>
              <p className="grey-text w-responsive mx-auto mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi,
                veritatis totam voluptas nostrum quisquam eum porro a pariatur
                veniam.
              </p>
              <MDBRow className="text-md-left">
                <MDBCol lg="6" md="12" className="mb-5">
                  <MDBCol md="4" lg="6" className="float-left">
                    <img
                      src={a}
                      alt="sas"
                      className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    />
                  </MDBCol>
                  <MDBCol md="8" lg="6" className="float-right">
                    <h4 className="font-weight-bold mb-3">John Doe</h4>
                    <h6 className="font-weight-bold grey-text mb-3">
                      Web Designer
                    </h6>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur.
                    </p>
                    <a href="#!" className="p-2 fa-lg fb-ic">
                      <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href="#!" className="p-2 fa-lg tw-ic">
                      <MDBIcon fab icon="twitter" />
                    </a>
                    <a href="#!" className="p-2 fa-lg dribbble-ic">
                      <MDBIcon fab icon="dribbble" />
                    </a>
                  </MDBCol>
                </MDBCol>

                <MDBCol lg="6" md="12" className="mb-5">
                  <MDBCol md="4" lg="6" className="float-left">
                    <img
                      src={b}
                      width="220"
                      height="200"
                      alt="sas"
                      className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    />
                  </MDBCol>
                  <MDBCol md="8" lg="6" className="float-right">
                    <h4 className="font-weight-bold mb-3">Maria Kate</h4>
                    <h6 className="font-weight-bold grey-text mb-3">
                      Photographer
                    </h6>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur.
                    </p>
                    <a href="#!" className="p-2 fa-lg fb-ic">
                      <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href="#!" className="p-2 fa-lg yt-ic">
                      <MDBIcon fab icon="youtube" />
                    </a>
                    <a href="#!" className="p-2 fa-lg ins-ic">
                      <MDBIcon fab icon="instagram" />
                    </a>
                  </MDBCol>
                </MDBCol>

                <MDBCol lg="6" md="12" className="mb-5">
                  <MDBCol md="4" lg="6" className="float-left">
                    <img
                      src={c}
                      width="220"
                      height="200"
                      alt="sas"
                      className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    />
                  </MDBCol>
                  <MDBCol md="8" lg="6" className="float-right">
                    <h4 className="font-weight-bold mb-3">Anna Deynah</h4>
                    <h6 className="font-weight-bold grey-text mb-3">
                      Web Developer
                    </h6>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur.
                    </p>
                    <a href="#!" className="p-2 fa-lg fb-ic">
                      <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href="#!" className="p-2 fa-lg tw-ic">
                      <MDBIcon fab icon="twitter" />
                    </a>
                    <a href="#!" className="p-2 fa-lg github-ic">
                      <MDBIcon fab icon="github" />
                    </a>
                  </MDBCol>
                </MDBCol>

                <MDBCol lg="6" md="12" className="mb-5">
                  <MDBCol md="4" lg="6" className="float-left">
                    <img
                      src={d}
                      width="220"
                      height="200"
                      alt="sas"
                      className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    />
                  </MDBCol>
                  <MDBCol md="8" lg="6" className="float-right">
                    <h4 className="font-weight-bold mb-3">Sarah Melyah</h4>
                    <h6 className="font-weight-bold grey-text mb-3">
                      Front-end Developer
                    </h6>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur.
                    </p>
                    <a href="#!" className="p-2 fa-lg gplus-ic">
                      <MDBIcon fab icon="google-plus-g" />
                    </a>
                    <a href="#!" className="p-2 fa-lg li-ic">
                      <MDBIcon fab icon="linkedin-in" />
                    </a>
                    <a href="#!" className="p-2 fa-lg email-ic">
                      <MDBIcon icon="envelope" />
                    </a>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    );
  }
}
