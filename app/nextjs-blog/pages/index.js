import Head from 'next/head';
import Layout, { siteTitle } from '../componenets/layout';
import utilStytles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStytles.headingMd}>
        <p>Hello, I’m tkiryc. I’m a software engineer. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)          
        </p>
      </section>
    </Layout>
  );
}
