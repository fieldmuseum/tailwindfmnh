import Link from 'next/link'

export default function ButtonTertiary() {
    return(
        <button className="font-graphik font-[500] text-lg/[1.8rem]">
            <span>
                <Link href={"#"}>Tertiary Button</Link>
            </span>
        </button>
    )
}