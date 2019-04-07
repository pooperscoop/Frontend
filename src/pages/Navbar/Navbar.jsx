import React, { Component } from 'react';
import '../../styles/navbar.scss';
class Navbar extends Component {

    // navClicked() {
    //     var x = document.getElementById("myTopnav");
    //     if (x.className === "topnav") {
    //         x.className += " responsive";
    //     } else {
    //         x.className = "topnav";
    //     }
    // }

    render() {
        return (
        <div>
            <div className="topnav" id="myTopnav">
                <a href="#home" onClick={() => window.location.href='/dashboard'}className="bg-grad-two">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" className="icon">
                    <i className="fa fa-bars"></i>
                </a>
            </div>
            {/* <script>{this.navClicked()}</script> */}
        </div>
        );
    };
};

export default Navbar;