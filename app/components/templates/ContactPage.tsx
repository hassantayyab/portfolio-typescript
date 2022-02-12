import Head from 'next/head'

import Container from '@layout/Container'
import Contact from '@module/Contact'
import Footer from '@module/Footer'
import NavBar from '@module/NavBar'

import styles from './HomePage.module.scss'

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Hassan Tayyab | Contact Page</title>
        <meta
          name="description"
          content="Contact me to get started on a new journey"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <header>
          <NavBar />
        </header>
        <main className={styles.main}>
          <Contact />
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </Container>
    </>
  )
}

export default ContactPage
