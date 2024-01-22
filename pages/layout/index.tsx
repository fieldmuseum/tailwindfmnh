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
    </div>
  )
}