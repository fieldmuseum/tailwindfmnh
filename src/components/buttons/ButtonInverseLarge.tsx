import Link from 'next/link';

export default function ButtonInverseLarge() {
    return(
        <button className="mt-5 px-[16px] py-[8px] font-graphik font-[500] text-2xl/[2.4rem] text-fieldGrayLighter border-fieldGrayLighter border-2 hover:text-fieldBlue hover:bg-fieldGrayLighter inline-flex">
            <Link href={'#'}>
                Inverted Large Button
            </Link>
        </button>
    )
}