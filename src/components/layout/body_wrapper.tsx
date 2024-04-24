import React from 'react'
import Header from './header'
import Footer from './footer'

interface BodyWrapperProps {
  pageTitle?: string
  tabTitle?: string
  children?: React.ReactNode
}

const BodyWrapper: React.FC<BodyWrapperProps> = (props) => {

  return(
    <div className="body_wrapper">
      <Header 
        title={props.pageTitle}
        tabTitle = {props.tabTitle}/>
      <main className="container-fluid bg-white">
        <div className="container">
          {props.children}
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default BodyWrapper;