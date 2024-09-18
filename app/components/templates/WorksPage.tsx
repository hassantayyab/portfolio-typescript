import React from 'react';

import Head from 'next/head';

import { WORKS } from '@constant/works';
import WorkCard from '@element/WorkCard';
import Container from '@layout/Container';
import Footer from '@module/Footer';
import NavBar from '@module/NavBar';

import styles from './WorksPage.module.scss';

const WorksPage = () => {
  const works = WORKS;

  return (
    <>
      <Head>
        <title>Hassan Tayyab | Contact Page</title>
        <meta name='description' content='View all our works' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <header>
          <NavBar />
        </header>
        <main>
          <section>
            <div className={styles.heading}>
              <h3>Works</h3>
              <p>We love to show some of our best work</p>
            </div>
            <div className={styles.content}>
              {works.map((work, i) => (
                <WorkCard key={i} {...work} />
              ))}
            </div>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </Container>
    </>
  );
};

export default WorksPage;
