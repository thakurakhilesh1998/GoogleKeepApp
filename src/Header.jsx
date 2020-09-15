import React from 'react';
import logo from './images/googlekeep.png';
import './header.css';

const Header=()=>{
    return(
        <>
            <div className="header">
                <img src={logo} className="img"/>
                <h1>Thakur's Notes</h1>
            </div>
        </>

    );
}

export default Header;