import React from 'react'
import { Link } from 'gatsby'
import '../assets/css/navbar.scss'


const Navbar = () => {
    return(

        <nav className="navbar navbar-expand-md navbar-dark fixed-top ">

            <div className="container-fluid">

                <Link className="navbar-brand" to="/">Natasa Tofil</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar"
                     aria-labelledby="offcanvasDarkNavbarLabel">

                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Duhovnost</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Pocetna</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/galerija">Galerija</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}
export default Navbar