import React from 'react';
import {Link} from 'react-router-dom';
const About = () => {
    return ( 
        <>
        <header id="about-header">
            <div className="get-back">
                <Link to="/"><i className="fas fa-arrow-left"></i></Link>
            </div>
            <div className="section-description">About me</div>
        </header>

        <div className="paragraphs">
            <div className="first-paragraph">
                <h2>Who am I</h2>
                <p>I am a person who is passionate about coding. Usually I create websites and mobile applications mainly covered by UX, HTML, CSS (SASS), JAVASCRIPT, REACT.JS and other libraries as needed. For designing I use Figma. Text editor that I use for coding is Visual Studio Code.</p>
            </div>
            <div className="second-paragraph">
                <h2>What's my goal</h2>
                <p>My main goal is to continually improve my coding skills. I want to explore new technologies and learn to use them.</p>
            </div>
        </div>

        <div className="more-about">
            <span>If you want to know more about me click <Link to='about/more'>here.</Link></span>
        </div>
        </>
     );
}
 
export default About;