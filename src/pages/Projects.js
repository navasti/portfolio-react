import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
const Projects = () => {
    return ( 
        <section className="projects">
            <div className="get-back">
            <Link to="/"><i className="fas fa-arrow-left"></i></Link>
            </div>
            <div className="project">
                <h2>Shopping cart website</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga, officiis doloribus deserunt magnam.</p>
                <span>If you want to check it live click 
                    <a href=""> here</a>
                </span>
            </div>
            <div className="project">
                <h2>Portfolio</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga, officiis doloribus deserunt magnam.</p>
                <span>If you want to check it live click 
                    <a href=""> here</a>
                </span>
            </div>
            <p>All my uploaded projects are available on my github profile.</p>
        </section>
     );
}
 
export default Projects;