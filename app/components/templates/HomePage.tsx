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
  return (
    <>
      <Head>
        <title>Hassan Tayyab | Web Designer & Developer</title>
        <meta
          name="description"
          content="My name is Hassan and I am a web designer and developer"
        />
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
              <ScrollButton />
            </div>
          </section>
          {/* <div id="services">
            <Services />
          </div> */}
          {/* <Process /> */}
          <Works />
          <AboutMe />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </Container>
    </>
  )
}

export default HomePage
