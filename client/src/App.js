import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { getCurrentUser } from "./redux/user/user.actions";
import { getCurrentUserFromDBStart } from "./redux/user/user.actions";

import SignInPage from "./pages/sign-in/signIn.page";
import HomePage from "./pages/homepage/homepage.page";
import Header from "../src/components/header/header.component";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    console.log("component did mount");
    const currentUser = this.props.getCurrentUser;
    const currentUserFromDB = this.props.getCurrentUserFromDB;
    currentUser();
    currentUserFromDB();
  }

  render() {
    console.log("currentUserFromDB:", this.props.currentUserDB);
    return (
      <div>
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/" component={Header} />
        <Route path="/" component={HomePage} exact />
      </div>
    );
  }
}

const mapDispatchToProps = (dipsatch) => ({
  getCurrentUser: () => dipsatch(getCurrentUser()),
  getCurrentUserFromDB: () => dipsatch(getCurrentUserFromDBStart()),
});

const mapStateToProps = (state) => ({
  currentUserDB: state.user.currentUserDB,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
