import Link from 'next/link'

export default function ButtonTertiary() {
    return(
        <button className="font-graphik font-[500] text-lg/[1.8rem] mt-3 px-[10px] py-[6px] inline-block relative align-middle">
            <span>
                <Link href={"#"}>Tertiary Button</Link>
            </span>
            <span className="bg-transparent origin-center rotate-45 w-[6px] h-[6px] border-t-[1px] border-fieldBlue border-r-[1px] border-fieldBlue after:content=['*'] absolute top-[45%] right-[-2%]">
            </span>
        </button>
    )
}