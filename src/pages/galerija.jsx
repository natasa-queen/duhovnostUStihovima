import React from 'react'
import Layout from "../components/Layout";
import {Seo} from "../components/Seo";
import {Script} from "gatsby";
import '../assets/css/main.css'

const Galerija = () => {
    return(
        <Layout>
            <div className='kontejner'>
                <h2>Stranica u pripremi</h2>
            </div>
        </Layout>
    )
}
export default Galerija



export function Head() {
    return (
        <>
            <Seo title="Galerija" />

            <link rel="stylesheet" type="text/css" href={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"} />

            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                rel="stylesheet"
            />

            <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                rel="stylesheet"
            />

            {/*<link*/}
            {/*    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.css"*/}
            {/*    rel="stylesheet"*/}
            {/*/>*/}

            <Script src={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"}/>
            <Script src={"https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js"}/>
        </>
    )
}