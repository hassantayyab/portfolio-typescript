import { useRef } from 'react'

import Head from 'next/head'

import ScrollButton from '@element/ScrollButton'
import Container from '@layout/Container'
import AboutMe from '@module/AboutMe'
import Footer from '@module/Footer'
import Hero from '@module/Hero'
import NavBar from '@module/NavBar'
import Process from '@module/Process'
import Services from '@module/Services'
import Works from '@module/Works'

import styles from './HomePage.module.scss'

const HomePage = () => {
  const focusElement = useRef<HTMLDivElement>(null)

  return (
    <>
      <Head>
        <title>Hassan Tayyab | Web Designer & Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <header>
          <NavBar />
        </header>
        <main>
          <section>
            <Hero />
            <div className={styles.scrollButton}>
              <ScrollButton focusElement={focusElement} />
            </div>
          </section>
          <div ref={focusElement}>
            <Services />
          </div>
          <Process />
          <Works />
          <AboutMe />
        </main>
        <footer>
          <Footer />
        </footer>
      </Container>
    </>
  )
}

export default HomePage
