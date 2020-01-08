import React from 'react';
import {Link} from 'react-router-dom';
const MoreAbout = () => {
    return ( 
        <>
        <header className="contact-header">
            <div className="get-back">
                <Link to="/about"><i className="fas fa-arrow-left"></i></Link>
            </div>
            <div className="section-description">More about me</div>
        </header>
        <h1 style={{fontSize: '6rem',textAlign: 'center', marginBottom: '10rem'}}>Will be added soon.</h1>
        </>
     );
}
 
export default MoreAbout;