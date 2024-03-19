import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ButtonInversePrimary from '@components/buttons/ButtonInversePrimary'

export default function Footer(){
  return(
    <footer className='footer js-footer'>
      <h2 className="sr-only">Footer</h2>
      <div className="container">
        <div className="footer-top">
          <div className="row flex flex-col">
            <p>Musuem is open daily from <strong>9AM-5PM. </strong> Last Entry is at <strong>4PM.</strong></p>
            <p>Museum is Located at:</p>
            <p className="footer-address"><Link href="https://maps.app.goo.gl/f2QgqgvdwPtZR6Ft6"> 1400 S. DUSABLE LAKE SHORE DRIVE, CHICAGO, IL 60605</Link></p>
          </div>
          <div className="row">
            <div className="footer-link-section">
              <div className="footer-link-lists">
                <div className="footer-social-media">
                  <div className="footer-social-media-logo">
                    <Image src="/icons/field_museum_logo.svg" alt="Field Logo SVG" width={90} height={90}/>
                  </div>
                  <ul className="footer-social-media-list">
                    <li>
                      <Link href="https://www.facebook.com/fieldmuseum" aria-label='Field Museum Facebook Page' title="Field Museum Facebook Page">
                        <Image src="/icons/facebook.svg" alt="Facebook Logo SVG" width={20} height={20}/>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/fieldmuseum" aria-label='Field Museum Instagram Page' title="Field Museum Instagram Page">
                        <Image src="/icons/instagram.svg" alt="Instagram Logo SVG" width={20} height={20}/>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.twitter.com/SUEtheTrex" aria-label='Sue the T-Rex Twitter' title="Sue the T-Rex Twitter">
                        <Image src="/icons/sue-the-trex.svg" alt="Sue the T-Rex SVG" width={20} height={20}/>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.twitter.com/FieldMuseum" aria-label='Field Museum Twitter Page' title="Sue the T-Rex Twitter">
                        <Image src="/icons/twitter.svg" alt="Twitter Logo SVG" width={20} height={20}/>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/user/thebrainscoop" aria-label='The Brain Scoop YouTube Channel' title="The Brain Scoop YouTube Channel">
                        <Image src="/icons/youtube.svg" alt="YouTube Logo SVG" width={20} height={20}/>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-about font-graphikMed">
                  <ul>
                    <li>
                      <Link href="https://www.fieldmuseum.org/about">About</Link>
                    </li>
                    <li>
                      <Link href="https://www.fieldmuseum.org/diversity-equity-access-and-inclusion">DEAI</Link>
                    </li>
                    <li>
                      <Link href="https://www.fieldmuseum.org/about/careers">Careers</Link>
                    </li>
                    <li>
                      <Link href="https://www.fieldmuseum.org/volunteer">Volunteer</Link>
                    </li>
                    <li>
                      <Link href="https://www.fieldmuseum.org/venue-rentals">Venue Rentals</Link>
                    </li>
<<<<<<< HEAD
=======
                  </ul>
                </div>
                <div className="footer-about">
                  <ul>
                  <li>
                      <Link href="https://www.fieldmuseum.org/traveling-exhibitions">Traveling Exhibitions</Link>
                    </li>
                    <li>
                      <Link href="https://www.fieldmuseum.org/about/press-room">Press Room</Link>
                    </li>
                    <li>
                      <Link href="https://store.fieldmuseum.org/">Store</Link>
                    </li>
                    <li>
                      <Link href="https://www.fieldmuseum.org/about/contact">Contact Us</Link>
                    </li>
>>>>>>> 69198c8 (adding small changes to footer)
                  </ul>
                </div>
                <div className="footer-about">
                  <ul>
                    <li>
                        <Link href="https://www.fieldmuseum.org/traveling-exhibitions">Traveling Exhibitions</Link>
                      </li>
                      <li>
                        <Link href="https://www.fieldmuseum.org/about/press-room">Press Room</Link>
                      </li>
                      <li>
                        <Link href="https://store.fieldmuseum.org/">Store</Link>
                      </li>
                      <li>
                        <Link href="https://www.fieldmuseum.org/about/contact">Contact Us</Link>
                      </li>
                  </ul>
                </div>
                <div>
                  <br></br>
                </div>
              </div>
              <div className="footer-newsletter">
                <h3 className="text-2xl">Join Our Newsletter!</h3>
                <form>
                  <div className="form-group mb-0">
                    <label htmlFor="newsletterEmail" className="form-label">Email Address*</label>
                    <input type="email" placeholder='Please enter your email' id="newsletterEmail" className="form-input" required/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-statements font-graphikBold">
            <ul>
              <li>
                <Link href="https://www.fieldmuseum.org/about/non-discrimination-statement">Non-Discrimination Statement</Link>
              </li>
              <li>
                <Link href="https://www.fieldmuseum.org/about/privacy-statement">Privacy Statement</Link>
              </li>
              <li>
                <Link href="https://www.fieldmuseum.org/about/terms-use">Terms of Use</Link>
              </li>
              <li>
                <Link href="https://www.fieldmuseum.org/about/copyright-statement">Copyright Statement</Link>
              </li>
            </ul>
          </div>
          <div className="footer-copyright">
            <span>&copy; 2024 Field Museum</span>
          </div>
        </div>
      </div>
    </footer>
  )
}