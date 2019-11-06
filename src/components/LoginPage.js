import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../actions";
import loader from "./Assets/loader.gif";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.logout();

    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({ submitted: !prevState.submitted }));
    const { username, password } = this.state;
    if (username && password) this.props.login(username, password);
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={
              "form-group" + (submitted && !username ? " has-error" : "")
            }
          >
            <label htmlFor="username">Username</label>
            <input
              value={username}
              onChange={this.handleChange}
              type="text"
              className="form-control username"
              name="username"
            />
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={this.handleChange}
              type="password"
              className="form-control"
              name="password"
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            {loggingIn && (
              <img
                alt="loading"
                style={{ width: "8%", paddingLeft: "1rem" }}
                src={loader}
              />
            )}
            <Link to="/register" className="btn btn-link">
              Register
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

const successfullyConnectedLoginPage = connect(
  mapStateToProps,
  actionCreators
)(LoginPage);

export { successfullyConnectedLoginPage as LoginPage };
export { LoginPage as TestLoginPage };
