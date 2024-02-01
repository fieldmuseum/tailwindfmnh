import React from 'react'
import Navbar from './navbar'
import Image from 'next/image'

export default function Header(){
  return(
    <>
      <header className='header js-header'>
        <h2 className="sr-only">Header</h2>
        <div className="header-logo">
          <Image src="/icons/field_museum_logo.svg" alt="Field Logo" width={90} height={90}/>
        </div>
        {/* this is where the navbar will be */}
        <Navbar/>
      </header>
      <div className="container-fluid">
          <div className="row basic-hero-wrapper">
            <div className="container">
              <div className="row h-full">
                <div className="basic-page-hero col-md offset-md">
                  <h1 className="basic-hero-title">Tailwind Basic Header</h1>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}