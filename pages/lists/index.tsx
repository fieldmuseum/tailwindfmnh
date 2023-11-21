import Head from 'next/head'
import styles from '@styles/Home.module.css'
import OrderedList from '@components/lists/ordered-list'



export default function Lists () {
    return (
       <div className={styles.container}>
            <Head>
                <title>List styles</title>
                <meta name="description" content="TailwindCSS FMNH list component styles" />
            </Head>    
            <main className={styles.main}>
                <h1 className={styles.title}>List Components</h1>
                <section>
                    <h3 className="font-graphik text-2xl mt-6">Ordered List</h3>
                    <OrderedList/>
                </section>
            </main>
        </div>
    )
}