import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg border-bottom sticky-top" style={{ backgroundColor: "#fff" }}>
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img src="media/images/logo.svg" alt="Logo" style={{ width: "25%" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="d-flex" role="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/product">Product</Link>  
                            </li>

                            <li classNameName="nav-item">
                                <Link className="nav-link active" to="/pricing">Pricing</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/support">Support</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/"><i class="fa-solid fa-bars"></i></Link>
                            </li>
                            
                        </ul>
                    </form>
                </div>
            </div>
        </nav>

    )
}