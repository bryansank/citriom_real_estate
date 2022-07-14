import React from "react";
import Link from "next/link";
import Image from "next/image";

// Ceo
// import Document, { Head, Html, Main, NextScript } from 'next/document';
import Head from "next/head";

import imgz from "../data_houses_imgs/1.jpg";

const HomePage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ceo Citriom</title>
      </Head>

      <main>
        <header id="header">Buscador</header>
      
        <section>
        {/* Card */}
        <div className="card">
          <figure className="prueba">
            {/* <img src={imgz} alt="House 1" /> */}
            <Image src={imgz} width={300} height={300} />
          </figure>
          <p>
            <span>Dirección, </span>
            <span>Ciudad, </span>
            <span>País</span>
          </p>
          <p>
            <span>4 habitaciones, </span>
            <span>2 baños</span>
          </p>
          <p>Precio $</p>
        </div>
      </section>
     

        <footer id="footer">Footer</footer>
        </main>

      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
            font-size: 18px;
            font-weight: 400;
            line-height: 1.8;
            color: #333;
            font-family: sans-serif;
            background: antiquewhite;
          }
        `}
      </style>

      <style jsx>
        {`
        figure {
            margin: 0;
        }

        .card{
            
        }

        #footer {
            position: relative;
            bottom: 0px;
        }
        `}
        </style>
    </>
  );
};

export default HomePage;
