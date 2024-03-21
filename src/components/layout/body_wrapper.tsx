import React from 'react'
import Header from './header'
import Footer from './footer'

export default function BodyWrapper (){
  return(
    <div className="body_wrapper">
      <Header/>
      <main className="container-fluid">
        <div className="container">
        </div>
      </main>
      <Footer/>
    </div>
  )
}