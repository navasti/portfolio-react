import React from 'react';
import { Link } from 'react-router-dom';
const Projects = () => {
    return ( 
        <>
        <header id="projects-header">
            <div className="get-back">
                <Link to="/"><i className="fas fa-arrow-left"></i></Link>
            </div>
            <div className="section-description">Projects</div>
        </header>

        <div className="projects">
            <div className="first-project">
                <h2>Shopping cart</h2>
                <p>This is a simple store page with an efficient shopping cart. All technologies I used when creating the project are: HTML, CSS (SCSS), JavaSctipt, Git, FontAwesome Icons. The page is responsive but not intended for mobile.</p>
                <span>If you want to check it live tap 
                    <a href="https://navasti.github.io/shopping-cart-js/"> here.</a>
                </span>
            </div>
            <div className="second-project">
                <h2>This portfolio</h2>
                <p>This one page  portfolio was made using React library and according to the mobile first rule so this project is fully responsive.</p>
                <span>If you want to check it live tap 
                    <a href="https://navasti.github.io/shopping-cart-js/"> here.</a>
                </span>
            </div>
        </div>
        <div className="more-projects">
            <p>All my uploaded projects are available on my <a href="https://github.com/navasti">github</a> profile.</p> 
        </div>
        </>
     );
}
 
export default Projects;