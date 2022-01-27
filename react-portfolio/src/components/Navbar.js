import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";


const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <div className="container">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to = '/' className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to = '/aboutMe' className="nav-link" >About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to = '/Projects' className="nav-link" >Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to = '/contactMe' className="nav-link" >Contact Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to = '/Resume' className="nav-link" >Resume</Link>
                            </li>
                            
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
        <br></br>
        <Outlet/>
    </div>
        
    )
}

export default Navbar