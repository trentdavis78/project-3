import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

class Modal extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let modal = document.querySelectorAll(".modal");
        M.Modal.init(modal, {});
    }
    render() {
        return (
            <div>               
                <div id={this.props.id} className="modal">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal



