import Head from "next/head";
import styles from '@styles/Home.module.css';
import Header from "@components/layout/header";
import BodyWrapper from "@components/layout/body_wrapper";

export default function Layout(){
  return(
    <BodyWrapper></BodyWrapper>
    // <div className={styles.container}>
    //   <Head>
    //       <title>Layout Styles</title>
    //       <meta name="description" content="TailwindCSS FMNH layout styles" />
    //   </Head> 
    //   <main className={styles.main}>
    //     <h1 className={styles.title}>Layout Styles</h1>
    //     <section>
    //     </section> 
    //   </main>
    // </div>
  )
}