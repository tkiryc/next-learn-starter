import Head from 'next/head';
import Layout, { siteTitle } from '../componenets/layout';
import utilStytles from '../styles/utils.module.css';
import { getSortedPostData } from '../lib/post';

export async function getStaticProps() {
  const allPostsData = getSortedPostData();
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStytles.headingMd}`}>
        <p>Hello, I’m tkiryc. I’m a software engineer. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)          
        </p>
      </section>
      <section className={`${utilStytles.headingMd} ${utilStytles.padding1px}`}>
        <h2 className={utilStytles.headingLg}>Blog</h2>
        <ul className={utilStytles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStytles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
