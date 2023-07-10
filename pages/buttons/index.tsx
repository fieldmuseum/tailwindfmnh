// Implement the buttons found on the FMNH style guide
// https://www.fieldmuseum.org/about/styleguide#buttons

// TODO - add tailwindcss styles to all of the different styles of buttons

import Head from 'next/head'
import styles from '@styles/Home.module.css'
import ButtonPrimary from "@components/buttons/ButtonPrimary"

export default function Buttons() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Button styles</title>
        <meta name="description" content="tailwindfmnh button styles" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Button components</h1>

        {/* Start here */}
        <ButtonPrimary />

      </main>
    </div>
  )
}
