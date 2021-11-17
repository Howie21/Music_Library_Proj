import React from 'react';
import "./Header.css"

function Header(props) {
    return ( 
        <div className="holder">
            <h1 className="head">
                Music Library
            </h1>
            <p className="comment">Created as a project for devCodeCamp</p>
        </div>
     );
}

export default Header;
