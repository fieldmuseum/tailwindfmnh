import Link from 'next/link'

export default function ButtonPrimary() {
  return (
    <button className="mt-5">
      <Link href={'#'}>
      Learn More
      </Link>
    </button>
  )
}
