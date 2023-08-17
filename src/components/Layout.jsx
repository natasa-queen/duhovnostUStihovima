import React from 'react'
import Navbar from '../components/Navbar'
import {Seo} from "./Seo";
import {Script} from "gatsby";

// import '../assets/css/main.css'

const Layout = ({children}) => {
    return (
        <>

            <Navbar />

            {children}
        </>
    )
}
export default Layout


