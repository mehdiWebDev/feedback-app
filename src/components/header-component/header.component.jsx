import React from 'react';
import "./header.styles.scss";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header style={{background: "rgba(0,0,0,0.4)" }}>
            <div className="container" >
             <Link to="/" className='logo' >  <h2>Feedback UI</h2></Link>  
            </div>
        </header>
    );
}


export default Header;