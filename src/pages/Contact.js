import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
const Contact = () => {
    return ( 
        <section id="contact">
            <header class="contact-projects">
                <div className="get-back">
                    <Link to="/"><i className="fas fa-arrow-left"></i></Link>
                </div>
                <div className="section-description">Contact me</div>
            </header>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" id="name"/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"/>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="3"></textarea>
                <button>Send</button>
            </form>
            <div className="or">or</div>
            <div className="direct-email">
                Write directly <br/>
                szostak_pawel@outlook.com
            </div>
        </section>
     );
}
 
export default Contact;