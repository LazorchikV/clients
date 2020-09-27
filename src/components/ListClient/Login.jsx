import React from "react";
import ReactDOM from 'react-dom';

function UserGreeting(props) {
    return <h6>С возвращением!</h6>;
  }
  
  function GuestGreeting(props) {
    return <h6>Войдите, пожалуйста.</h6>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  ReactDOM.render(
    // Попробуйте заменить на isLoggedIn={true} и посмотрите на эффект.
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
  );

  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Войти
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Выйти
      </button>
    );
  }


  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  };
  export default LoginControl;