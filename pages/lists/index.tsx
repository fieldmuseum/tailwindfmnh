import Head from 'next/head'
import styles from '@styles/Home.module.css'
import OrderedList from '@components/lists/ordered-list'
import UnorderedList from '@components/lists/unordered-lists'
import TitledList from '@components/lists/titled-list'



export default function Lists () {
    return (
       <div className={styles.container}>
            <Head>
                <title>List Styles</title>
                <meta name="description" content="TailwindCSS FMNH list component styles" />
            </Head>    
            <main className={styles.main}>
                <h1 className={styles.title}>List Component Styles</h1>
                <section>
                    <h3 className="font-graphik text-2xl mt-6">Ordered List</h3>
                    <OrderedList/>
                </section>
                <section>
                    <h3 className="font-graphik text-2xl mt-3">Unordered List</h3>
                    <UnorderedList/>
                </section>
                <section>
                    <h3 className="font-graphik text-2xl mt-3 mb-4">Titled List</h3>
                    <TitledList/>
                </section>
            </main>
        </div>
    )
}