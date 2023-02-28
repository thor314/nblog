import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import Date from "../components/date";
import { GetStaticProps } from "next";

export default function About({
  aboutProps,
}: {
  aboutProps: {
    name: string;
    date: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>About</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={aboutProps.date} />
        </div>
        <div>todo: about content</div>
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // todo 
  const aboutProps = {name: "thor", date: "2023-02-27" };
  return {
    props: {
      aboutProps: aboutProps,
    },
  };
};
