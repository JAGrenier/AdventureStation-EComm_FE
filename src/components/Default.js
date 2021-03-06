import React, { Component } from 'react'
import mouse from '../images/mouse.svg';

export default class Default extends Component {
    render() {
        console.log("default", this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1> Error</h1>
                        <p> The requested URL <span className='text-danger'>{this.props.location.pathname}</span> was not found. It may have been eaten by this hungry mouse.</p>
                        <img src={mouse} alt="icon of an gray mouse" className="image-fluid mouse"/>
                    </div>
                </div>
            </div>
        )
    }
}
