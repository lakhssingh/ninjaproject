import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>NinajList | Home</title>
        <meta name="keywords" content="ninjas, code"/>
     </Head>
      <div> 
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut</p>
      <Link href="/ninjas">
      <a className={styles.btn}>see ninja listing</a></Link>
    </div>
    </>
  )
}
