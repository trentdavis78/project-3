import React, { Component } from 'react'

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper" style={{background: "#003594"}}>
                    <a href="#!" className="brand-logo"><img style={{width: 150}} className="logo" src="assets/images/logo.svg" alt="logo" /></a>
                    <a href="#" data-target="slide-out" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#!">News</a></li>
                        <li><a href="#!">Articles</a></li>
                        <li><a href="#!">Events</a></li>
                        <li><a href="#!">Resources</a></li>
                        <li><a href="#!">Services</a></li>
                        <li><a className="waves-effect waves-light btn pink accent-3 modal-trigger" href="#loginModal">Login</a></li>                      
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar

