import React, { Component } from 'react'
import './Navbar.css';
export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>PORTFOLIO</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        )
    }
}

export default Navbar
