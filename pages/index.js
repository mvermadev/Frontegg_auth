import Head from 'next/head'
import Root from './home'
import styles from '../styles/Home.module.css'
import { useAuth, useLoginWithRedirect, AdminPortal } from '@frontegg/nextjs';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Student Assist</title>
        <meta name="description" content="Get Student Assistant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Root/>
      </main>
    </div>
  )
}
