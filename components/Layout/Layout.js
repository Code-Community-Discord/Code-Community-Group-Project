import Head from 'next/head'
import Footer from "../Footer/Footer"
import styles from "./Layout.module.css"

export default function Layout({ children }) {
  // TODO: replace title with prop
  return (
    <div>
      <Head>
        <title>Code Community App</title>
        <meta name="description" content="A social media app built with Django and Next.js" />
        <link rel="icon" href="/cc_logo.png" />
      </Head>
      
      <main className={styles.main}>{children}</main>
      
      <Footer />
    </div>
  )
}