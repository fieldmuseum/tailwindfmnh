import Link from 'next/link'

export default function ButtonInverseTertiary() {
    return(
        <button className="font-graphik font-[500] text-lg/[1.8rem] mt-3 px-[10px] py-[6px] inline-block relative align-middle text-fieldGrayLighter">
            <span>
                <Link href={"#"}>Inverse Tertiary Button</Link>
            </span>
            <span className="bg-transparent origin-center rotate-45 w-[6px] h-[6px] border-t-[1px] border-fieldGrayLighter border-r-[1px] border-fieldGrayLighter after:content=['*'] absolute top-[45%] right-[-2%]">
            </span>
        </button>
    )
}