import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <>
        <nav id="desktop-nav">
            <ul>    
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="home-link"><Link to="/">Home</Link></li>
            </ul>
        </nav>
        <div className="me">
            <h1 className="first-name">Paweł</h1>
            <h1 className="last-name">Szostak</h1>
            <h1 className="full-name">Paweł Szostak</h1>
            <p>Hello, my name is Paweł. I am 22 years old web developer who designs and builds user interfaces.</p>
        </div>
        <nav id="mobile-nav">
            <ul>    
                <li><Link to="/about">About</Link></li>
                 <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <footer id="footer">
            <a href="https://github.com/navasti"><i className="fab fa-github"></i></a>
            <a href="//"><i className="far fa-envelope"></i></a>
            <a href="https://www.instagram.com/navasti/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/szostak-paw"><i className="fab fa-facebook"></i></a>
        </footer>
        </>
     );
}
 
export default Home;