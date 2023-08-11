"use client";

import Head from "next/head";
import { doLogin } from "@/services/Web3Service";
import { useState } from "react";

export default function Home() {

  const [message, setMessage] = useState("");


  function btnLoginClick() {
    setMessage("Conectando com a MetaMask, aguarde...");
    doLogin()
      .then(wallet => setMessage(wallet))
      .catch(err => setMessage(err))
  }


  return (
    <>
      <Head>
        <title>CrypTwitter | Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://images.unsplash.com/photo-1536010305525-f7aa0834e2c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyaWVuZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="d-block mx-lg-auto img-fluid" width="700" height="500" />
          </div>

          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">CrypTwitter</h1>
            <p className="lead">Sua rede social descentralizada</p>
            <p className="lead mb-3">Autentique-se com a sua carteira, escreva mensagens e saiba o que está acontendo pelo mundo</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={btnLoginClick}>
                <img src="/metamask.svg" alt="" width="64" className="me-3" />
                Conectar com a MetaMask
              </button>
            </div>
            <p className="message">{message}</p>
          </div>

        </div>
      </div>
    </>

  )
}
