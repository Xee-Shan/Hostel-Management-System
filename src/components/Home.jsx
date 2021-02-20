import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Card,
  ProgressBar,
  Table
} from "react-bootstrap";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
  MDBFooter,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import "./Home.css";
import a from "./Images/a.jpg";
import b from "./Images/b.jpg";
import e from "./Images/e.jpg";

export default class Home extends Component {
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
              <Nav.Link href="/student/login">Student Login</Nav.Link>
              <Nav.Link href="/signup">Register</Nav.Link>
              <Nav.Link href="/admin/login">Admin Login</Nav.Link>
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
        <header>
          <h1>Hostel Management System</h1>
        </header>
        <div>
          <h2>About us</h2>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBJumbotron style={{ padding: 0 }}>
                  <MDBCol
                    className="text-white text-center py-5 px-4 my-5"
                    style={{
                      backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`
                    }}
                  >
                    <MDBCol className="py-5">
                      <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                        Create your beautiful website with MDBootstrap
                      </MDBCardTitle>
                      <p className="mx-5 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellat fugiat, laboriosam, voluptatem, optio
                        vero odio nam sit officia accusamus minus error nisi
                        architecto nulla ipsum dignissimos. Odit sed qui,
                        dolorum!
                      </p>
                      <MDBBtn outline color="white" className="mb-5">
                        <MDBIcon icon="clone" className="mr-2"></MDBIcon> View
                        project
                      </MDBBtn>
                    </MDBCol>
                  </MDBCol>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <h2>Services</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <Card bg="primary" text="white" style={{ width: "18rem" }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Primary Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </div>
            <div className="col-sm-4">
              <Card bg="primary" text="white" style={{ width: "18rem" }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Primary Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </div>
            <div className="col-sm-4">
              <Card bg="primary" text="white" style={{ width: "18rem" }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Primary Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </div>
          </div>
        </div>
        <div className="container">
          <MDBContainer>
            <section className="text-center my-5">
              <h2 className="h1-responsive font-weight-bold my-5">
                Testimonials
              </h2>
              <p className="dark-grey-text w-responsive mx-auto mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi,
                veritatis totam voluptas nostrum quisquam eum porro a pariatur
                veniam.
              </p>
              <MDBRow>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBCard testimonial>
                    <img
                      src={a}
                      alt="sas"
                      className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    />
                    <MDBCardBody>
                      <h4 className="font-weight-bold mb-4">John Doe</h4>
                      <hr />
                      <p className="dark-grey-text mt-4">
                        <MDBIcon icon="quote-left" className="pr-2" />
                        Lorem ipsum dolor sit amet eos adipisci, consectetur
                        adipisicing elit.
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBCard testimonial>
                    <img
                      src={b}
                      alt="sas"
                      className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    />
                    <MDBCardBody>
                      <h4 className="font-weight-bold mb-4">Anna Aston</h4>
                      <hr />
                      <p className="dark-grey-text mt-4">
                        <i className="fa fa-quote-left pr-2" />
                        Neque cupiditate assumenda in maiores repudiandae
                        mollitia architecto.
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBCard testimonial>
                    <img
                      src={e}
                      alt="sas"
                      className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    />
                    <MDBCardBody>
                      <h4 className="font-weight-bold mb-4">Anna Aston</h4>
                      <hr />
                      <p className="dark-grey-text mt-4">
                        <i className="fa fa-quote-left pr-2" />
                        Neque cupiditate assumenda in maiores repudiandae
                        mollitia architecto.
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>
        </div>
        <div className="container">
          <h2>Progress</h2>
          <ProgressBar variant="success" now={40} />
          <ProgressBar variant="info" now={20} />
          <ProgressBar variant="warning" now={60} />
          <ProgressBar variant="danger" now={80} />
        </div>
        <div className="container">
          <h2>List of students</h2>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>
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
                <a href="https://www.MDBootstrap.com"> Osama and Zeehan </a>
              </MDBContainer>
            </div>
          </MDBFooter>
        </div>
      </div>
    );
  }
}
