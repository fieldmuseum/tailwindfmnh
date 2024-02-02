import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){
  return(
    <footer className='footer js-footer'>
      <h2 className="st-only">Footer</h2>
      <div className="footer-top">
        <div className="row">
          <p>MUSEUM OPEN DAILY, 9AM-5PM, LAST ENTRY 4PM</p>
          <p>CLOSED THANKSGIVING DAY AND CHRISTMAS DAY</p>
          <p>MUSEUM IS LOCATED AT 1400 S. DUSABLE LAKE SHORE DRIVE, CHICAGO, IL 60605</p>
        </div>
        <div className="row">
          
        </div>
      </div>
      <div className="footer-bottom"></div>
    </footer>
  )
}