import Link from 'next/link'

export default function ButtonSecondary() {
  return (
    <button 
      className="mt-5 px-[26px] py-[10px] font-graphik font-[500] text-lg/[1.8rem] border-fieldBlue border-2 text-fieldGrayDark tracking-wide hover:bg-fieldBlue hover:text-fieldGrayLighter">
      <Link href={'#'}>
        Secondary Button
      </Link>
    </button>
  )
}
