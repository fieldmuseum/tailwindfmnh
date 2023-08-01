import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import styles from '../styles/globals.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tailwindfmnh</title>
        <meta name="description" content="FMNH-styled components using tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          tailwindfmnh
        </h1>

        <div className={styles.grid}>
          <Link href="/buttons" className={styles.card}>
            Button components
          </Link>

        </div>
      </main>

    </div>
  )
}
