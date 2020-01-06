import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Error from '../pages/Error';
import './Page.css';
const Content = () => {
    return ( 
        <section className="container">
            <nav id="nav">
                <ul>    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Error}/>
            </Switch>
        </section>
        
     );
}
 
export default Content;