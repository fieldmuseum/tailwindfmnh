import Link from 'next/link';
import Image from 'next/image'

export default function ButtonShuffle() {
    return(
        <div className="flex">
            <button className=" mt-4 font-graphik font-[500] text-lg/[1.8rem] mt-3 px-[26px] py-[10px] align-middle relative transition ease-in-out duration-200 hover:bg-fieldGrayLighter text-fieldBlue">
                <Link href={'#'}>
                    <span className="mr-2 inline-block">
                        <Image src='https://www.datocms-assets.com/44232/1662998329-shuffle-icon.svg' alt='Shuffle Icon' width={24} height={18}/>
                    </span>
                    Shuffle Button
                    </Link>
            </button>
        </div>
    )
}