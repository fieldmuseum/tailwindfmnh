import Link from 'next/link'

export default function ButtonSecondary() {
  return (
    <button className="mt-5 px-5 py-2 font-graphikBold border-fieldBlue border-2 text-fieldGrayLigher tracking-wider">
      <Link href={'#'}>
        Secondary Button
      </Link>
    </button>
  )
}