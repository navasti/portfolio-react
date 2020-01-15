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
                <p>I am a person who is passionate about coding. Usually I create websites and mobile applications mainly covered by UX, UI, HTML, CSS (SASS), JAVASCRIPT, REACT.JS and other libraries if needed. For designing I use Figma and Adobe XD. Text editor that I use for coding is Visual Studio Code.</p>
            </div>
            <div className="middle-line"></div>
            <div className="second-paragraph">
                <h2>What's my goal</h2>
                <p>I want to explore new technologies and learn to use them. My main goal is to continually improve my coding skills and become a web developer. </p>
            </div>
        </div>

        <div className="more-about">
            <span>If you want to know more about me click <Link to='/more-about'>here.</Link></span>
        </div>
        </>
     );
}
 
export default About;