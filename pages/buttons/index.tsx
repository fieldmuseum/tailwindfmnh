// Implement the buttons found on the FMNH style guide
// https://www.fieldmuseum.org/about/styleguide#buttons

// TODO - add tailwindcss styles to all of the different styles of buttons

import Head from 'next/head'
import styles from '@styles/Home.module.css'
import ButtonPrimary from "@components/buttons/ButtonPrimary"
import ButtonSecondary from '@components/buttons/ButtonsSecondary'
import ButtonLarge from '@components/buttons/ButtonLarge'
import '../../styles/buttons.module.scss'
import ButtonTertiary from '@components/buttons/ButtonTertiary'
import ButtonShuffle from '@components/buttons/ButtonShuffle'
import ButtonInversePrimary from '@components/buttons/ButtonInversePrimary'
import ButtonInverseLarge from '@components/buttons/ButtonInverseLarge'
import ButtonInverseTertiary from '@components/buttons/ButtonInverseTertiary'

export default function Buttons() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Button styles</title>
        <meta name="description" content="tailwindfmnh button styles" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Button Components</h1>

        {/* Start here */}
        <ButtonPrimary />
        <ButtonSecondary/>
        <ButtonLarge/>
        <ButtonTertiary/>
        <ButtonShuffle/>
        <section className="bg-fieldBlack flex flex-col p-4 mt-4 items-center">
            <ButtonInversePrimary/>
            <ButtonInverseLarge/>
            <ButtonInverseTertiary/>
        </section>
      </main>
    </div>
  )
}
