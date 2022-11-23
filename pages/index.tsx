import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import WeatherCard from '../components/weatherCard'

export default function Home() {
  return (
    <div className='app'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <WeatherCard />
      </main>
    </div>
  )
}
