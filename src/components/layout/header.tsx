import React from 'react'
import Navbar from './navbar'

export default function Header(){
  return(
    <>
      <header className='header js-header'>
        <div className="header_logo"></div>
        {/* this is where the navbar will be */}
        <Navbar/>
      </header>
      <div className="container-fluid">
          <div className="row">
            <div className="container">
              <div className="basic-page-hero w-full">
                <h1 className="brand-h2 basic-page-header text-white">Tailwind Basic Header</h1>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}