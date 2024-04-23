import React from 'react'
import Navbar from './navbar'
import Image from 'next/image'

interface HeaderProps{
  title?: string
  tabTitle?: string
}

const Header: React.FC<HeaderProps> = (props) => {
console.log(props);
  return(
    <>
      <header className='header js-header'>
        <h2 className="sr-only">{props.tabTitle}</h2>
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
                <div className="basic-page-hero col-md">
                  <h1 className="basic-hero-title">{props.title}</h1>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Header