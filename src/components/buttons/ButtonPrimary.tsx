import Link from 'next/link'
import localFont from 'next/font/local'


export default function ButtonPrimary() {
  return (
    <button 
      className="mt-5 px-5 py-2 bg-fieldBlue 
                 text-lg text-fieldGrayLighter 
                 font-graphikBold tracking-wider 
                 hover:bg-hoverBlue 
                 ">
      <Link href={'#'}>
        Primary Button
      </Link>
    </button>
  )
}
