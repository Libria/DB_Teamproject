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
      Users: [],
      User: null,
      regit: false
    }

    this.loginUsers = [];
    this.checkId = this.checkId.bind(this);
    this.checkRegit = this.checkRegit.bind(this);
    this.adderId = this.adderId.bind(this);
  }

  componentDidMount() {
    this.getUser();
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
    var include = false;
    var user = null;
    for (var i=0; i<this.state.Users.length; i++) {
      if (inputs[0] === this.state.Users[i].username) {
        user = inputs[0];
        include = true;
      }
    }
    if (inputs[1] !== inputs[2]) {
      alert("비밀번호를 확인해주십시오.")
    } else if (include === true) {
      alert("로그인 되었습니다.");
      this.setState({logined: true, User: user});
    } else {
      alert("아이디 비밀번호를 확인해주십시오.");
    }
  }

  checkRegit() {
    this.setState({regit: true});
    document.getElementById('userid').value = "";
    document.getElementById('userpw1').value = "";
    document.getElementById('userpw2').value = "";
  }
  
  adderId() {
    var username = document.getElementById('addid').value;
    var password = document.getElementById('addpw1').value;
    var password2 = document.getElementById('addpw2').value;

    if (password !== password2) {
      return alert("비밀번호를 확인해주세요.");
    } else {
      var count = this.state.Users[this.state.Users.length-1].id;
      var inputs = {
        id: count+1,
        username: username,
        password: password
      }
    }
    var tmp = this.state.Users;
    tmp.push(inputs);
    this.setState({Users: tmp, regit: false});
    document.getElementById('addid').value = "";
    document.getElementById('addpw1').value = "";
    document.getElementById('addpw2').value = "";
  }

  renderLogin() {
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
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <CardTitle className="title-up" tag="h3">
                      Sign In
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
                      로그인
                    </Button>
                    <Button
                      className="btn-neutral btn-round"
                      color="info"
                      onClick={this.checkRegit.bind(this)}
                      size="lg"
                      style={{marginLeft: '20px'}}
                    >
                      회원가입
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
            <img src={require('./PersonIcon.png')}
            width="300px" height="300px"></img>
            <h3>UserName: {this.state.User}</h3>
            <div className="BookedList">

            </div>
          </div>
        </div>
    )
  }

  renderRegit() {
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
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <CardTitle className="title-up" tag="h3">
                      Sign Up
                    </CardTitle>
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
                      <Input id="addid"
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
                      <Input id="addpw1"
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
                      <Input id="addpw2"
                        placeholder="Confrim Password..."
                        type="text"
                        onFocus={() => this.setState({lastFocus: true})}
                        onBlur={() => this.setState({lastFocus: false})}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-neutral btn-round"
                      color="info"
                      onClick={this.adderId.bind(this)}
                      size="lg"
                    >
                      확인
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Row>
          </Container>
        </div>
      </>
    );
  }

  render() {
    if (this.state.regit === true) {
      return (
        <>
          {this.renderRegit()}
        </>
      )
    } else if (this.state.logined === false) {
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
