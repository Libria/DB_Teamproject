import React from "react";
import axios from 'axios';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";

import './SignUp.css';

// core components

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstFocus: false,
      lastFocus: false,
      emailFocus: false,
      logined: false,
      Users: []
    }

    this.loginUsers = [];
    this.checkId = this.checkId.bind(this);
  }

  getUser = async() => {
    const User = await axios.get("http://localhost:8000/customers/serializer/user/?format=json");
    this.setState({Users: User.data});
  }

  getInputed() {
    var inputs = [];
    inputs.push(document.getElementById('userid').value);
    inputs.push(document.getElementById('userpw1').value);
    inputs.push(document.getElementById('userpw2').value);
    return inputs;
  }

  checkId() {
    var inputs = this.getInputed();
    console.log(this.state.Users);
    console.log(inputs);
    this.setState({logined: true})
  }

  renderLogin() {
    this.getUser();
    return (
      <>
        <div
          className="section section-signup"
          style={{
            backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px"
          }}
        >
          <Container>
            <Row>
              <Card className="card-signup" data-background-color="blue">
                <Form action="_self" className="form" method="">
                  <CardHeader className="text-center">
                    <CardTitle className="title-up" tag="h3">
                      Sign Up
                    </CardTitle>
                    <div className="social-line">
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="lg"
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon btn-round"
                        color="google"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-google-plus"></i>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border" + (this.state.firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input id="userid"
                        placeholder="ID..."
                        type="text"
                        onFocus={() => this.setState({FirstFocus: true})}
                        onBlur={() => this.setState({FirstFocus: false})}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" + (this.state.lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input id="userpw1"
                        placeholder="Password..."
                        type="text"
                        onFocus={() => this.setState({lastFocus: true})}
                        onBlur={() => this.setState({lastFocus: false})}
                      ></Input>
                    </InputGroup>

                    <InputGroup
                      className={
                        "no-border" + (this.state.lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input id="userpw2"
                        placeholder="Confrim Password..."
                        type="text"
                        onFocus={() => this.setState({lastFocus: true})}
                        onBlur={() => this.setState({lastFocus: false})}
                      ></Input>
                    </InputGroup>
                    {/*
                    <InputGroup
                      className={
                        "no-border" + (this.state.emailFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email..."
                        type="text"
                        onFocus={() => this.setState({emailFocus: true})}
                        onBlur={() => this.setState({emailFocus: false})}
                      ></Input>
                    </InputGroup>*/}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-neutral btn-round"
                      color="info"
                      onClick={this.checkId.bind(this)}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Row>
            {/*
            <div className="col text-center">
              <Button
                className="btn-round btn-white"
                color="default"
                to="/login-page"
                outline
                size="lg"
                tag={Link}
              >
                View Login Page
              </Button>
            </div>
            */}
          </Container>
        </div>
      </>
    );
  }

  renderLogined() {
    var index = 0;
    return (
      <div
          className="section section-signup"
          style={{
            backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px"
          }}
        >
          <div className="Logined">
            <h3>UserName: {this.state.Users[index].username}</h3>
            <p>ID : {this.state.Users[index].id}</p>
            <div className="BookedList">
              
            </div>
          </div>
        </div>
    )
  }

  render() {
    if (this.state.logined === false) {
      return (
        <>
        {this.renderLogin()}
        </>
      )
    } else {
      return (
        <>
          {this.renderLogined()}
        </>
      )
    }
  }
}

export default SignUp;
