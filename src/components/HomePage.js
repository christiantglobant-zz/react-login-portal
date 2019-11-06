import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2 align="center">{`Welcome ${user.username}! You have successfully logged in.`}</h2>
        <p align="center">
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return { user };
}

const successfullyConnectedHomePage = connect(mapStateToProps)(HomePage);

export { successfullyConnectedHomePage as HomePage };
