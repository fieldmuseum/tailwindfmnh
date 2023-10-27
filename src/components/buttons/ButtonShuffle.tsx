import Link from 'next/link';
// import Image from 'next/image'

export default function ButtonShuffle() {
    return(
        <button className=" mt-4 font-graphik font-[500] text-lg/[1.8rem] mt-3 px-[14px] py-[9px] align-middle inline-flex items-center relative hover:bg-fieldGrayLighter before:content-shuffleButton before:alt-['Shuffle Icon'] before:top-[27%] before:left-[-16%] before:absolute text-fieldBlue">
            <Link href={'#'}>
                {/* <span className="mr-3  top-[27%] left-[-16%] absolute">
                    <Image src='https://www.datocms-assets.com/44232/1662998329-shuffle-icon.svg' alt='Shuffle Icon' width={24} height={18}/>
                </span> */}
                Shuffle Button
                </Link>
        </button>
    )
}