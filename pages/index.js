import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import client from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Layout from "../components/Layout";

const builder = imageUrlBuilder(client);

export default function Home({ products, vendors }) {
  const newProducts = products.slice(0, 3);
  const newVendors = vendors.slice(0, 5);
  return (
    <Layout home>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Chocolate Land</title>
      </Head>
      <div className={styles.grid}>
        {newProducts.map((product) => {
          const { defaultProductVariant = {} } = product;
          const { images } = defaultProductVariant;
          return (
            <Link key={product._id} href={`/product/${product.slug.current}`}>
              <a className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={builder.image(images[0]).width(300)} />
                </div>
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.blurb.en}</p>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
      <div className="jumbotron fluid">
        <div className="container-fluid vendor-content">
          <h4 className="vendor-text">
            Wide options of vendors to choose from here
          </h4>
          <ul>
            {newVendors.map((vendor) => {
              return (
                <li key={vendor.id}>
                  <h3>{vendor.title}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);
  const vendors = await client.fetch(`*[_type == "vendor"]`);
  return {
    props: {
      products,
      vendors,
    },
  };
}
