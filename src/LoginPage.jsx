import React from 'react';
import { observer } from 'mobx-react';
import UserStore from './components/LoginPageComponents/UserStore';
import LoginForm from './components/LoginPageComponents/LoginForm';
import SubmitButton from './components/LoginPageComponents/SubmitButton';

class Login extends React.Component{

  async componentDidMount() {
    try {
      let res = await fetch ('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }
      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }
    catch(e){
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }
  async doLogout() {
    try {
      let res = await fetch ('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
    }
    catch(e){
      console.log(e)
    }
  }

  render (){
    if (UserStore.loading){
      return (
        <div className="app">
          <div className="container">
            Loading, please wait...
          </div>
        </div>
      )
    }
    else {
      if (UserStore.loading){
       return (
          <div className="app">
            <div className="container">
              Bienvenido {UserStore.username}
              <SubmitButton
                text={'Log Out'}
                disabled={false}
                onClick={ () => this.doLogout() } 
              />
            </div>
          </div>
        )
      }
      return (
        <div className="app">
          <div className="container">
            <LoginForm />
          </div>
        </div>
      )
    }
  }
}

export default observer(Login);
