import Header from "../components/Header"
import React from "react"

export default function App({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Header />
            <Component {...pageProps} />
        </React.Fragment>
    )
  }