import Link from 'next/link'

export default function ButtonSecondary() {
  return (
    <button className='mt-5 btn border border-fieldBlue text-fieldBlue font-graphik font-[500] text-lg/[1.8rem] z-10 before:content-[""] before:block before:w-full before:animate-wipeIn after:hidden hover:before:btn-primary'>
      
      <Link href={"#"}>
        Secondary Button
      </Link>
    </button>
  )
}
