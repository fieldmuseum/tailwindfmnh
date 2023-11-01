import Link from 'next/link'

export default function ButtonInversePrimary(){
    return(
        <button className="mt-5 px-[26px] py-[10px] font-graphik font-[500] text-lg/[1.8rem] text-fieldGrayLighter border-fieldGrayLighter border-2 hover:text-fieldBlue after:hidden before:content-[''] before:translate-y-full hover:before:bg-fieldGrayLighter before:top-0 before:left-0 before:absolute before:h-full before:w-full before:transition-buttonAnimation">
            <Link href={'#'}>
                Inverted Primary Button
            </Link>
        </button>
    )
}