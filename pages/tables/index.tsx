// Implement the buttons found on the FMNH style guide
// https://www.fieldmuseum.org/about/styleguide#buttons

// TODO - add tailwindcss styles to all of the different styles of buttons

import Head from 'next/head'
import styles from '@styles/Home.module.css'
import TablesPrimary from '@components/tables/TablesPrimary'

export default function Tables() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Button styles</title>
        <meta name="description" content="tailwindfmnh button styles" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Table Components</h1>

        {/* Start here */}
        <TablesPrimary/>
      </main>
    </div>
  )
}
