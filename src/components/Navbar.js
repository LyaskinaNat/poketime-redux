import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="nav-wrapper light-blue darken-1">
            <div className="container">
                <a className="brand-logo">Poke' Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}
// in order to Navbar component to get access to props properties and methods
// like props.history.push(), we weed to pas props to Navbar component and also export it
//so now we have an information about Router component in a form of props inside Navbar component
// with Higher Order component: withRouter which wraps around our Navbar component: export default withRouter(Navbar)
// we do not need to do the same for our Home, About and Contact Components though because we directly apply
// Router component to them like so: <Route path='/about' component={ About } /> 
// so props methods are passed to these components automatically
export default withRouter(Navbar)