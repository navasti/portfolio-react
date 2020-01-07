import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <>
        <div className="social">
            <a href="https://github.com/navasti"><i className="fab fa-github"></i></a>
            <a href="//"><i className="far fa-envelope"></i></a>
            <a href="https://www.instagram.com/navasti/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/szostak-paw"><i className="fab fa-facebook"></i></a>
        </div>
        <div id="home">
            <div className="me">
                <div className="hello-caption">
                    h<br/>e<br/>l<br/>l<br/>o
                </div>
                <div className="there-caption">
                    t<br/>h<br/>e<br/>r<br/>e
                </div>
                <h1 className="first-name"><div className="single-line-up"></div>Paweł</h1>
                <h1 className="last-name">Szostak</h1>
                <p>Hello, my name is Paweł. I am 22 years old web developer who designs and builds user interfaces.</p>
                <div className="single-line-down"></div>
            </div>
            <div className="mobile-nav">
                <ul>    
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
        </>
     );
}
 
export default Home;