import React, { Component } from 'react';

import GuestPage from './Components/GuestPage';
import UserPage from './Components/UserPage';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {

    const isLoggedIn = this.state.isLoggedIn;

    let page;
    let button;

    if (isLoggedIn) {
      page = <UserPage />;
      button = <LogoutButton onClick={this.handleLogout} />;
    } else {
      page = <GuestPage />;
      button = <LoginButton onClick={this.handleLogin} />;
    }

    return (
      <div>

        {page}

        <br />

        {button}

      </div>
    );
  }
}

export default App;