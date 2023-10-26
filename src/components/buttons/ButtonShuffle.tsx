import Link from 'next/link';
import Image from 'next/image'

export default function ButtonShuffle() {
    return(
        <button className="font-graphik mt-4 font-graphik font-[500] text-lg/[1.8rem] mt-3 px-[14px] py-[9px] align-middle inline-flex items-center relative hover:bg-fieldGrayLighter">
            <Link href={'#'}>
                <span className="mr-3 before:content-[''] top-[27%] left-[-16%] absolute">
                    <Image src='https://www.datocms-assets.com/44232/1662998329-shuffle-icon.svg' alt='Shuffle Icon' width={24} height={18}/>
                </span>
                <span>Shuffle Button</span>
                </Link>
        </button>
    )
}