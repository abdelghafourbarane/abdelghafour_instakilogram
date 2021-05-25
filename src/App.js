import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import { getCurrentUser } from "./redux/user/user.actions";

import SignInPage from "./pages/sign-in/signIn.page";
import HomePage from "./pages/homepage/homepage.page";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    const currentUser = this.props.getCurrentUser;
    currentUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/" component={HomePage} exact />
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dipsatch) => ({
  getCurrentUser: () => dipsatch(getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
