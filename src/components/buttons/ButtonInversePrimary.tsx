import Link from 'next/link'

export default function ButtonInversePrimary(){
    return(
        <button className="mt-5 px-[26px] py-[10px] z-1 font-graphik font-[500] text-lg/[1.8rem] text-fieldGrayLighter  bg-transparent border-fieldGrayLighter border-2 hover:text-fieldBlue after:hidden before:content-[''] before:translate-y-full hover:before:bg-fieldGrayLighter before:absolute hover:before:overflow-hidden hover:before:z-[0]">
            <Link href={'#'}>
                Inverted Primary Button
            </Link>
        </button>
    )
}