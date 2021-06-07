import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top border fixed-top">
            <section className="container">
                <a className="d-flex navbar-brand fs-2 fw-bold bg-info p-2"> Bhavika Patel</a>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <section className="collapse navbar-collapse" id="navbarSupportedContent">

                    <section className="navbar-nav ms-auto">
                        <Link
                            className="nav-link"
                            to="/">Home</Link>

                        <Link
                            className="nav-link"
                            to="/portfolio">Portfolio
                </Link>

                        <Link
                            className="nav-link"
                            to="/contact">Contact
                </Link>

                    </section>
                </section>
                </section>
        </nav>
    );
}

export default Navbar;
