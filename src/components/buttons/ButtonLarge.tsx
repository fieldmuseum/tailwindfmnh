import Link from 'next/link'


export default function ButtonLarge(){
    return(
        <button 
        className="mt-5 px-10 py-3 bg-fieldBlue 
                   text-xl text-fieldGrayLighter 
                   font-graphikBold tracking-wider 
                   hover:bg-hoverBlue ">
            <Link href={'#'}>
                Large Button
            </Link>
        </button>
    )
}