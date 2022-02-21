import Head from 'next/head'
import { useRouter } from 'next/router'

import { WORKS } from '@constant/works'
import Container from '@layout/Container'
import Footer from '@module/Footer'
import NavBar from '@module/NavBar'
import Work from '@module/Work'

const WorkPage = () => {
  const router = useRouter()
  const workId = router.query.id
  const work = WORKS.find(w => w.id === workId)

  return (
    <>
      <Head>
        <title>Hassan Tayyab | {work?.title}</title>
        <meta name="description" content="View one of our amazing work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <header>
          <NavBar />
        </header>
        <main>{work && <Work {...work} />}</main>
        <footer>
          <Footer />
        </footer>
      </Container>
    </>
  )
}

export default WorkPage
