import Head from 'next/head'
import styles from '@styles/Home.module.css'
import RadioGroup from '@components/form-elements/radio'
import Checkboxes from '@components/form-elements/checkboxes'

export default function Forms() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Testing - Form Element Styles</title>
          <meta name="description" content="tailwindfmnh form element styles" />
        </Head>
        <main className={styles.main}>
          <section className="w-[30%]">
            <h3 className="font-graphik text-2xl mt-6 mb-4">Basic Form Elements</h3>
            <RadioGroup />
            <Checkboxes />
          </section>
        </main>
      </div>
  )
}
