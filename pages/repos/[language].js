import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Language({ language }) {
  return (
    <Head>
      <title>Repos on {language}</title>
      <link rel="icon" href="/GitHub-Mark.png" />
    </Head>
  )
}
