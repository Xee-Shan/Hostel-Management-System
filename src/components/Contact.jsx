import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Nav, Navbar, FormControl } from "react-bootstrap";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput
} from "mdbreact";
import { MDBContainer, MDBFooter } from "mdbreact";
import "./Home.css";

export default class Contact extends Component {
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
            <h1>Contact us</h1>
          </header>
        </div>
        <div className="container">
          <section className="my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Contact us
            </h2>
            <p className="text-center w-responsive mx-auto pb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
            <MDBRow>
              <MDBCol lg="5" className="lg-0 mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <div className="form-header blue accent-1">
                      <h3 className="mt-2">
                        <MDBIcon icon="envelope" /> Write to us:
                      </h3>
                    </div>
                    <p className="dark-grey-text">
                      We'll write rarely, but only the best content.
                    </p>
                    <div className="md-form">
                      <MDBInput
                        icon="user"
                        label="Your name"
                        iconClass="grey-text"
                        type="text"
                        id="form-name"
                      />
                    </div>
                    <div className="md-form">
                      <MDBInput
                        icon="envelope"
                        label="Your email"
                        iconClass="grey-text"
                        type="text"
                        id="form-email"
                      />
                    </div>
                    <div className="md-form">
                      <MDBInput
                        icon="tag"
                        label="Subject"
                        iconClass="grey-text"
                        type="text"
                        id="form-subject"
                      />
                    </div>
                    <div className="md-form">
                      <MDBInput
                        icon="pencil-alt"
                        label="Icon Prefix"
                        iconClass="grey-text"
                        type="textarea"
                        id="form-text"
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn color="light-blue">Submit</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="7">
                <div
                  id="map-container"
                  className="rounded z-depth-1-half map-container"
                  style={{ height: "400px" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                    title="This is a unique title"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                  />
                </div>
                <br />
                <MDBRow className="text-center">
                  <MDBCol md="4">
                    <MDBBtn tag="a" floating color="blue" className="accent-1">
                      <MDBIcon icon="map-marker-alt" />
                    </MDBBtn>
                    <p>New York, 94126</p>
                    <p className="mb-md-0">United States</p>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBBtn tag="a" floating color="blue" className="accent-1">
                      <MDBIcon icon="phone" />
                    </MDBBtn>
                    <p>+ 01 234 567 89</p>
                    <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBBtn tag="a" floating color="blue" className="accent-1">
                      <MDBIcon icon="envelope" />
                    </MDBBtn>
                    <p>info@gmail.com</p>
                    <p className="mb-md-0">sale@gmail.com</p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </section>
        </div>
        <div>
          <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="6">
                  <h5 className="title">Footer Content</h5>
                  <p>
                    Here you can use rows and columns here to organize your
                    footer content.
                  </p>
                </MDBCol>
                <MDBCol md="6">
                  <h5 className="title">Links</h5>
                  <ul>
                    <li className="list-unstyled">
                      <a href="#!">Link 1</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Link 2</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Link 3</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Link 4</a>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
              </MDBContainer>
            </div>
          </MDBFooter>
        </div>
      </div>
    );
  }
}
