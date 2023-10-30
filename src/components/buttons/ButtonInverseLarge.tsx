import Link from 'next/link';

export default function ButtonInverseLarge() {
    return(
        <button className="mt-5 w-full max-w-[280px] py-[10px] font-graphik font-[500] text-2xl/[2.4rem] text-fieldGrayLighter border-fieldGrayLighter border-2 hover:text-fieldBlue hover:bg-fieldGrayLighter ">
            <Link href={'#'}>
                Large Button
            </Link>
        </button>
    )
}