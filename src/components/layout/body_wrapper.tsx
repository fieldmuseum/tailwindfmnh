import React from 'react'
import Header from './header'
import Footer from './footer'

export default function BodyWrapper (){
  return(
    <div className="body_wrapper">
      <Header/>
      <main className="container-fluid">
        <div className="container">
          <div className="font-druk mt-6 mb-6">
            This is DRUK.
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}