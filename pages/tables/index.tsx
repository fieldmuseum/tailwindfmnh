// Implement the buttons found on the FMNH style guide
// https://www.fieldmuseum.org/about/styleguide#buttons

// TODO - add tailwindcss styles to all of the different styles of buttons

import Head from 'next/head'
import styles from '@styles/Home.module.css'
import TablesPrimary from '@components/tables/TablesPrimary'
import TablesStriped from '@components/tables/TablesStriped'

export default function Tables() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Table Styles</title>
        <meta name="description" content="tailwindfmnh button styles" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Table Components</h1>
        <section className='mb-5'>
          <h3 className="font-graphik text-2xl mt-6 mb-2">Standard Table</h3>
          <TablesPrimary/>
        </section>
        <section>
          <h3 className="font-graphik text-2xl mt-6 mb-2">Striped Table</h3>
          <TablesStriped/>
        </section>
      </main>
    </div>
  )
}
