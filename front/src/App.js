import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './header/Header';
import Footer from './header/Footer';
import MainEvent from './mainEvent/MainEvent';
import Question from './mainEvent/Question';
import SignIn from './signIn/SignIn';
import LogIn from './signIn/LogIn';
import LogOff from './signIn/LogOff';
import Code from './signIn/Code';
import './App.css';


function App() {
  return (
    <div className="app">
     <BrowserRouter>
      <Header />
      <Route exact path="/" component={MainEvent} />
      <Route path="/authentication/signin" component={SignIn} />
      <Route path="/authentication/login" component={LogIn} />
      <Route path="/authentication/logoff" component={LogOff} />
      <Route path="/reservation" component={Question} />
      <Route path="/code" component={Code} />
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
