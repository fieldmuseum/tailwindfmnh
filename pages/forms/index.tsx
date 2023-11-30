import Head from 'next/head'
import styles from '@styles/Home.module.css'
import BasicFormElements from '@components/form-elements/basic-form-elements'

export default function Forms() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Form Element Styles</title>
          <meta name="description" content="tailwindfmnh form element styles" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Form Element Styles</h1>
          <section>
            <h3 className="font-graphik text-2xl mt-6 mb-4">Basic Form Elements</h3>
            <BasicFormElements/>
          </section>
        </main>
      </div>
  )
}