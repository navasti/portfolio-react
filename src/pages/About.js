import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';
const About = () => {
    return ( 
        <section id="about">
            <div className="get-back">
                <Link to="/"><i className="fas fa-arrow-left"></i></Link>
            </div>
            <div className="first-paragraph">
                <h1>Who am I</h1>
                <p>I am a person who is passionate about coding. Usually I create websites and mobile applications mainly covered by UX, HTML, CSS, JAVASCRIPT (SASS), REACT.JS and other libraries as needed. For designing I use Figma. Text editor that I use for coding is Visual Studio Code.</p>
            </div>
            <div className="second-paragraph">
                <h1>What's my goal</h1>
                <p>My main goal is to continually improve my coding skills. I want to explore new technologies and learn to use them.</p>
            </div>
        </section>
     );
}
 
export default About;