import React from 'react'
import '../assets/css/main.css'


const Navbar = () => {
    return(

        <header>

            <nav className="navbar navbar-expand-md navbar-dark fixed-top ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Natasa Tofil</a>
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
                                    <a className="nav-link active" aria-current="page" href="#">Pocetna</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Galerija</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


            {/*<div className="p-5 text-center bg-light">*/}
            {/*    <h1 className="mb-3">Heading</h1>*/}
            {/*    <h4 className="mb-3">Subheading</h4>*/}
            {/*</div>*/}


            <div className=" slika">
                <div className="mask">
                    <div className="d-flex justify-content-center align-items-center h-100">

                        <div className="text-white poruke">
                            <figure className="p-3 text-end">
                                <blockquote className="blockquote">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                        ante.
                                    </p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Someone famous in Source Title
                                </figcaption>
                            </figure>
                        </div>

                    </div>
                </div>
            </div>


        </header>
    )
}
export default Navbar