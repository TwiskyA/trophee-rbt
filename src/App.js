import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './header/Header';
import MainEvent from './mainEvent/MainEvent';
import Question from './mainEvent/Question';
import SignIn from './signIn/SignIn';
import LogIn from './signIn/LogIn';
import LogOff from './signIn/LogOff';
import Code from './signIn/Code';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={MainEvent} />
      <Route path="/authentication/signin" component={SignIn} />
      <Route path="/authentication/login" component={LogIn} />
      <Route path="/authentication/logoff" component={LogOff} />
      <Route path="/reservation" component={Question} />
      <Route path="/code" component={Code} />
    </BrowserRouter>
  );
}

export default App;
