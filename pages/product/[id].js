import Layout from "../../components/Layout";
import Head from "next/head";
import client from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const builder = imageUrlBuilder(client);

export default function Product({ finalData }) {
  const { defaultProductVariant } = finalData[0];
  const { images } = defaultProductVariant;
  return (
    <Layout>
      <Head>
        <title>{finalData[0].title}</title>
      </Head>
      <div className={`${styles.grid} product-grid`}>
        <img src={builder.image(images[0]).width(300)} />
        <div className="product-values">
          <h1>{finalData[0].title}</h1>
          <p>{finalData[0].blurb.en} </p>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const products = await client.fetch(`*[_type == "product"]`);
  const paths = products.map((product) => {
    return {
      params: {
        id: product.slug.current,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.id || "";
  const productData = await client.fetch(`*[_type == "product"]`);
  const finalData = productData.filter((item) => item.slug.current === slug);
  return {
    props: {
      finalData,
    },
  };
}
