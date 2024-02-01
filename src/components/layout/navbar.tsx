import React from 'react';
import Link from 'next/link'

export default function Navbar(){
  return(
    <>
      <nav className="header-nav-bar">
          <h2 id="quick-navigation-label" className="sr-only">
            Quick Navigation
          </h2>
        <ul className="header-nav-bar-list js-nav-bar-list">
          <li className="header-nav-bar-item">
            <Link href={"#"} className="d-none d-md-inline">
              Visit 
            </Link>
          </li>
          <li className="header-nav-bar-item d-none d-md-block">
            <Link href={"Exhibitions"}>Exhibitions</Link>
          </li>
          <li className="header-nav-bar-item d-none d-md-block">
            <Link href={"#"}>Learn</Link>
          </li>
          <li className="header-nav-bar-item d-none d-md-block">
            <Link href={"#"}>Our Science</Link>
          </li>
          <li className="header-nav-bar-item d-none d-md-block">
            <Link href={"#"}>Membership</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}