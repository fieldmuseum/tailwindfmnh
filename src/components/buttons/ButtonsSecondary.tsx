import Link from 'next/link'
import { useState } from 'react'

export default function ButtonSecondary() {
  const [isHovered, setIsHovered] = useState(false)
  console.log(isHovered, ' on')
  console.log(!isHovered, ' off')
  return (
    <button className={`group mt-5 btn border-2 border-fieldBlue text-fieldBlue font-graphik font-[500] text-lg/[1.8rem] z-10 block hover:bg-transparent hover:text-fieldGrayLighter before:content-[""] before:block before:absolute before:bg-fieldBlue before:w-full before:h-full before:top-0 before:left-0 before:z-[-1] before:px-[26px] before:py-[11px] before:opacity-100 before:translate-y-[100%] before:transtion-all before:duration-200 ${isHovered && 'before:animate-wipeIn'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
      <Link href={"#"}>
          Secondary Button
      </Link>
    </button>
  )
}