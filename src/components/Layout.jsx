import React from 'react'
import Navbar from '../components/Navbar'

import {Script} from "gatsby";


import Header from '../components/Header'
// import {Seo} from "./Seo";

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            {/*<Header />*/}

            {children}
        </>
    )
}
export default Layout
