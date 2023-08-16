import React from 'react'
import '../assets/css/main.css'


const Header = () => {
    return(

        <header>
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
export default Header
