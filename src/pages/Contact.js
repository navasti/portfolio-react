import React from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
    return ( 
        <div className="contact">
            <div className="get-back">
                <Link to="/"><i className="fas fa-arrow-left"></i></Link>
            </div>
        </div>
     );
}
 
export default Contact;