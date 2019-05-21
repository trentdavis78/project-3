import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import 'materialize-css/dist/css/materialize.min.css';

// import AuthPage from './containers/AuthPage';
// import ConnectPage from './containers/ConnectPage';
import HomePage from './containers/HomePage/Loadable';
import { ConnectPage } from './containers/ConnectPage';
// import NotFoundPage from './containers/NotFoundPage/Loadable';
// import SecurePage from './containers/SecurePage';
// import ProtectedRoute from './containers/ProtectedRoute';

export class App extends Component {
  render() {
    return (
   <Router>
      <div> 
          <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/connect/:provider?" component={ConnectPage} />
      </Switch>    
      <Navbar />
      <Modal id={"loginModal"}>
      <div className="social-div" id="facebook">
          <a className="waves-effect waves-light btn-large social facebook">
            <i className="fab fa-facebook-f"></i> Sign in with facebook</a>
        </div>
        <div className="social-div" id="google">
          <a className="waves-effect waves-light btn-large social google" href="http://localhost:1337/connect/google">
            <i className="fab fa-google"></i> Sign in with google</a>
        </div>
        <div className="social-div" id="github">
          <a className="waves-effect waves-light btn-large social github">
            <i className="fab fa-github"></i> Sign in with github</a>
        </div>
      </Modal>
      </div>
      </Router>
    )
  }
}

export default App

