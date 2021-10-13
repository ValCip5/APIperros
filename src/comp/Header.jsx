import React from "react";
import './Header.css';

function Header() {
    return (
        <header>
            <nav>
            <ul>
                <li>
                    <h1>
                        <a href="#"><img src="logo.png" alt="Logo"/></a>
                    </h1>
                </li>
                <li className="info">
                    <div>
                        <a target="_blank" href="https://github.com/ValCip5"><i class="bi-github"></i></a> 
                     </div>
                </li>
            </ul>
            </nav>
        </header>
    )
}


export default Header



