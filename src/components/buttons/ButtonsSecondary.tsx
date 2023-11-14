import Link from 'next/link'
import { useState } from 'react'

export default function ButtonSecondary() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <button className={`mt-5 btn  relative border-2 border-fieldBlue text-fieldBlue font-graphik font-[500] text-lg/[1.8rem] z-10 block hover:bg-transparent before:content-[""] before:block before:absolute before:bg-fieldBlue before:border-2 before:border-fieldBlue before:text-fieldGrayLighter before:w-full before:h-full hover:before:btn-primary before:top-0 before:left-0 before:z-[-1] before:px-[26px] before:py-[10px] before:translate-y-[102%] before:transtion-all before:duration-200 ${isHovered && 'before:animate-wipeIn' ? 'before:animate-wipeIn': ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
      <Link href={"#"}>
        Secondary Button
      </Link>
    </button>
  )
}
