import Link from 'next/link'

export default function ButtonInversePrimary(){
    return(
        <button className="mt-5 px-[16px] py-[8px] font-graphik font-[500] text-lg/[1.8rem] text-fieldGrayLighter border-fieldGrayLighter border-2 hover:text-fieldBlue hover:bg-fieldGrayLighter">
            <Link href={'#'}>
                Inverted Primary Button
            </Link>
        </button>
    )
}