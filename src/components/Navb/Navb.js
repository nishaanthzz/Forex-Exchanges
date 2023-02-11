import React from "react";
import './Navb.css';
import logo from './logof.png';
const Navb=()=>
{
    return(
        <nav>
            <div class="container deepOrange pullRightLeft">
                <img src={logo} alt="logo" />
                <a href="/">HOME</a>
                <a href="/">ARTICLES</a>
                <a href="/">OUR SERVICES</a>
                <a href="/">ABOUT</a>
                <a href="/">CONTACT</a>
            </div>
        </nav>
    )
}
export default Navb;