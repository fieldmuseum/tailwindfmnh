import React from 'react'
import Image from 'next/image'

export default function HorizontalCard (){
  return(
    <>
      <h3>Horizontal Card</h3>
      <div className="horizontal-card-group">
        <div className="horizontal-card-text">
          <h4>Zoological Collections</h4>
          <p>Dessert gingerbread cupcake liquorice muffin marzipan powder. Tootsie roll wafer bonbon candy canes wafer caramels.</p>
          <button className="btn">Zoological Collections</button>
        </div>
        {/* <Image src='https://www.datocms-assets.com/44232/1633378404-17-069-1087-andersonwebexport.jpg' alt="" height={187} width={250} /> */}
      </div>
    </>
  )
}