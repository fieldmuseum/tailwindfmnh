import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
          TailwindCSS Component Library 
        </h1>

        <div className={styles.grid}>
          <Link href="/buttons" className={styles.card}>
            Buttons
          </Link>
          <Link href="/lists" className={styles.card}>
            Lists
          </Link>
          <Link href="/tables" className={styles.card}>
            Tables
          </Link>
          <Link href='/forms' className={styles.card}>
            Form Elements
          </Link>
        </div>
      </main>

    </div>
  )
}
