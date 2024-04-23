import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>tailwindfmnh</title>
        <meta name="description" content="FMNH-styled components using tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-fieldBlue h-40">
        <div className="header-logo relative pt-10 pl-10">
          <Image src="/icons/field_museum_logo.svg" alt="Field Museum Logo" width={90} height={90} />
        </div>
      </header>

      <h1 className="font-graphikBold text-2xl">TailwindCSS Component Library</h1>

      <main className="mb-auto h-40 flex items-center justify-center">
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
          <Link href="/layout" className={styles.card}>
            Layout
          </Link>
          <Link href="/cards" className={styles.card}>
            Cards
          </Link>
        </div>
      </main>

      <footer className="bg-fieldBlue h-40">
      </footer>

    </div>
  )
}
