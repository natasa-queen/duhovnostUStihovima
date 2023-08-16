import React from 'react'

const Header = () => {
    return(

        <header>
            <nav className="navbar navbar-expand-lg  fixed-top">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarExample01"
                        aria-controls="navbarExample01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarExample01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/*<div className="p-5 text-center bg-light">*/}
            {/*    <h1 className="mb-3">Heading</h1>*/}
            {/*    <h4 className="mb-3">Subheading</h4>*/}
            {/*</div>*/}


            <div className=" slika">


                <div className="mask">
                    {/*<div className="d-flex justify-content-center align-items-center h-100">*/}
                    <div>
                        <div className="text-white">
                            <h1 className="mb-3">Heading</h1>
                            <h4 className="mb-3">Subheading</h4>

                        </div>
                    </div>
                </div>




                {/*<div >*/}
                {/*    <div className="d-flex justify-content-center align-items-center h-100">*/}
                {/*        <div className="text-red">*/}
                {/*            <h1 className="mb-3">Naslov</h1>*/}
                {/*            <h4 className="mb-3">Tekst</h4>*/}

                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>


        </header>

    )
}
export default Header