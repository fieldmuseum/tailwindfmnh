import Link from 'next/link'


export default function ButtonLarge(){
    return(
        <button 
        className="mt-5 px-[30px] py-[8px] bg-fieldBlue font-graphik font-[500] text-2xl/[2.4rem] text-fieldGrayLighter tracking-wide hover:bg-hoverBlue ">
            <Link href={'#'}>
                Large Button
            </Link>
        </button>
    )
}