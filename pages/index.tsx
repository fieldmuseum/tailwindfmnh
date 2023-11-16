import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
//import styles from '../styles/globals.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>tailwindfmnh</title>
        <meta name="description" content="FMNH-styled components using tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 >
          tailwindfmnh
        </h1>

        <div className={styles.grid}>
          <Link href="/buttons" className={styles.card}>
            Buttons
          </Link>
          <Link href="/tables" className={styles.card}>
            Tables
          </Link>
        </div>
      </main>

    </div>
  )
}
