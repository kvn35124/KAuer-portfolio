import * as React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar: React.FC<INavbarProps> = () => {

    let glyphicon = {
        Home: <span className="glyphicon glyphicon-home"></span>,

    }

    return (
        <nav className="navbar fixed-bottom">
            <span className="glyphicon glyphicon-home"></span>
            <NavLink exact to="/" className="nav-item nav-link" activeClassName="nav-item nav-link active font-bold border-bottom">Home</NavLink>
            <NavLink exact to="/about" className="nav-item nav-link" activeClassName="nav-item nav-link active font-bold border-bottom">About</NavLink>
            <NavLink exact to="/work" className="nav-item nav-link" activeClassName="nav-item nav-link active font-bold border-bottom">Work</NavLink>
        </nav>
    )
};

interface INavbarProps { }



export default Navbar;