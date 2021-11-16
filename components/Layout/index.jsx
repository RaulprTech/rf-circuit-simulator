import React from 'react'
import Head from 'next/head'
import Header from './../Header'

function index(props) {
    return (
        <div className=" max-w-max">
            <Head>
                <title>Circuits</title>
                <meta name="description" content="Circuits simulation" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="main">
                {props.children}
            </main >
        </div>
    )
}

export default index
