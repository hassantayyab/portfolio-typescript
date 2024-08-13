import Head from 'next/head'

import Container from '@layout/Container'
import AboutMeHero from '@module/AboutMeHero'
import Experience from '@module/Experience'
import Footer from '@module/Footer'
import NavBar from '@module/NavBar'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Hassan Tayyab | About Me</title>
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
          <AboutMeHero />
          {/* <Experience /> */}
        </main>
        <footer>
          <Footer />
        </footer>
      </Container>
    </>
  )
}

export default AboutPage
