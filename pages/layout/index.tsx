import Head from "next/head";
import styles from '@styles/Home.module.css';

export default function Layout(){
  return(
    <div className={styles.container}>
      <Head>
          <title>List Styles</title>
          <meta name="description" content="TailwindCSS FMNH layout styles" />
      </Head> 
      <main className={styles.main}>
        <h1 className={styles.title}>Layout Styles</h1>
      </main>
      <section>
        <h3>Header</h3>
        <h3>Footer</h3>
        <h3>Body Layout</h3>
        
      </section>
    </div>
  )
}