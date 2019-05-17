import React, { Component } from 'react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';

export class App extends Component {
  render() {
    return (
      <div>      
      <Navbar />
      <Modal id={"loginModal"}>
      <div className="social-div" id="facebook">
          <a className="waves-effect waves-light btn-large social facebook">
            <i className="fab fa-facebook-f"></i> Sign in with facebook</a>
        </div>
        <div className="social-div" id="google">
          <a className="waves-effect waves-light btn-large social google">
            <i className="fab fa-google"></i> Sign in with google</a>
        </div>
        <div className="social-div" id="github">
          <a className="waves-effect waves-light btn-large social github">
            <i className="fab fa-github"></i> Sign in with github</a>
        </div>
      </Modal>
      </div>
    )
  }
}

export default App

