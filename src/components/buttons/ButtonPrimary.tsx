import Link from 'next/link'

export default function ButtonPrimary() {
  return (
    <button className="field-blue">
    <Link href={'#'} className="py-10">
      Learn More
    </Link>
    </button>
  )
}
