import * as React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar: React.FC<INavbarProps> = () => {

    let glyphicon = {
        Home: <span className="fas fa-home"></span>,
        Work: <span className="fas fa-briefcase"></span>
    }

    return (
        <nav className="navbar fixed-top bg-dark mb-5">
            <NavLink exact to="/" className="nav-item nav-link" activeClassName="nav-item nav-link active font-bold border-bottom">Home</NavLink>
            <NavLink exact to="/experience" className="nav-item nav-link" activeClassName="nav-item nav-link active font-bold border-bottom">Experience</NavLink>
            <NavLink exact to="/work" className="nav-item nav-link" activeClassName="nav-item nav-link active font-bold border-bottom">Projects</NavLink>
        </nav>
    )
};

interface INavbarProps { }



export default Navbar;