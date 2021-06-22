import React from "react";
import { Link, NavLink } from "react-router-dom";
//import "./Navbar.css";
import styles from "./Navbar.module.css";

//ovde su dva primera sa NavLink. Ovde je primer sa Navbar.module.css i u njima mora da se u javascriptu promeni activnaclasa u styles.active inace nece da radi
//drugi primer je obican Navbar.css. On ce raditi bez menjanja klase i u ovom slucaju mora da se izbrise activeClassName={styles.active}

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/" className="navbar-brand">React Router</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName={styles.active} className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName={styles.active} className="nav-link">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;