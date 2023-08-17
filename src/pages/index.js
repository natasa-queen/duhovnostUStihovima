import * as React from "react"
import Layout from "../components/Layout";
import {Script} from "gatsby";
import { Seo } from '../components/Seo'

import '../assets/css/main.css'

import Header from "../components/Header";
import Lista from '../components/lista-pesama'


export default function Home() {
  return(
      <Layout>

        <Header />

        <Lista />

      </Layout>
  )
}






export function Head() {
    return (
        <>
            <Seo title="Pocetna strana" />

            <link rel="stylesheet" type="text/css" href={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"} />

            {/*<link*/}
            {/*    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"*/}
            {/*    rel="stylesheet"*/}
            {/*/>*/}




            {/*<link*/}
            {/*    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.css"*/}
            {/*    rel="stylesheet"*/}
            {/*/>*/}

            <Script src={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"}/>
            {/*<Script src={"https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js"}/>*/}
        </>
    )
}
