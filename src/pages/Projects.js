import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
const Projects = () => {
    return ( 
        <section id="my-projects">
            <header class="about-projects">
                <div className="get-back">
                    <Link to="/"><i className="fas fa-arrow-left"></i></Link>
                </div>
                <div className="section-description">Projects</div>
            </header>
            <div className="projects">
                <div className="first-project">
                    <h1>Shopping cart</h1>
                    <p>This is a simple store page with an efficient shopping cart. All technologies I used when creating the project are: HTML, CSS (SCSS), JavaSctipt, Git, FontAwesome Icons. The page is responsive but not intended for mobile.</p>
                    <span>If you want to check it live tap 
                        <a href="https://navasti.github.io/shopping-cart-js/"> here.</a>
                    </span>
                </div>
                <div className="second-project">
                    <h1>Portfolio</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga, officiis doloribus deserunt magnam.</p>
                    <span>If you want to check it live tap 
                        <a href="https://navasti.github.io/shopping-cart-js/"> here.</a>
                    </span>
                </div>
            </div>
            <div className="more-projects">
                <p>All my uploaded projects are available on my github profile.</p> 
            </div>
        </section>
     );
}
 
export default Projects;