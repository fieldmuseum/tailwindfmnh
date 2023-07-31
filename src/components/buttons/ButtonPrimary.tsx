import Link from 'next/link'

export default function ButtonPrimary() {
  return (
    <button className="mt-5 bg-fieldBlue text-fieldGrayLighter">
      <Link href={'#'}>
        Learn More
      </Link>
    </button>
  )
}
