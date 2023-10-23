import Link from 'next/link'

export default function ButtonSecondary() {
  return (
    <button 
      className="mt-5 px-[16px] py-[8px] font-graphik font-[500] text-lg/[1.8rem] border-fieldBlue border-2 text-fieldGrayDark tracking-wide hover:bg-fieldBlue hover:text-fieldGrayLighter">
      <Link href={'#'}>
        Secondary Button
      </Link>
    </button>
  )
}
