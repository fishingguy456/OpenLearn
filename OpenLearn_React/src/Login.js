import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="col-md-6">
        <form>
          <div class="form-group">
            <label style={{marginLeft: '605px'}} for="exampleInputEmail1">Email address</label>
            <input  value={this.state.email} style={{marginLeft: '325px'}} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div class="form-group">
            <label style={{marginLeft: '605px'}} for="exampleInputPassword1"> Password</label>
            <input  value={this.state.password} style={{marginLeft: '325px'}} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" onClick={this.login} style={{marginLeft: '605px'}} class="btn btn-primary">Login</button>
          <button onClick={this.signup} style={{marginLeft: '600px'}} className="btn btn-success">Signup</button>
        </form>
      
      </div>
    );
  }
}
export default Login;
