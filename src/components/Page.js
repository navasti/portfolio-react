import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Error from '../pages/Error';

const Content = () => {
    return ( 
        <div id="container">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Error}/>
            </Switch>
        </div>
     );
}
 
export default Content;