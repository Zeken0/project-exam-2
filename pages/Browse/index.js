import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/NavBar";
import styles from "/styles/Home.module.scss";
import axios from "axios";

export async function getStaticProps() {
  const response = await axios.get("http://127.0.0.1:1337/api/bits-and-botss");
  const data = await response.data;

  return {
    props: { games: data.data },
  };
}

export default function Browse({ games }) {
  console.log(games[3].attributes.Title);
  return (
    <>
      <Head>
        <title>Browse | Bits & Bots</title>
        <meta
          name="description"
          content="This is the browse page for the Bits & bots online game store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className={styles.browse_container}>
        <main>
          <div className={styles.browse_actions}>
            <h1>Browse our games</h1>
            <button>View Cart</button>
          </div>
          <div className={styles.browse_content}>
            <div className={styles.browse_filters}>filters</div>
            <div className={styles.browse_games}>
              {games.map((game) => {
                <div>
                  <Image
                    src={game.attributes.image_url}
                    height={100}
                    width={100}
                    alt="image of a game"
                  />
                  <h2>{game.attributes.Title}</h2>
                </div>;
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
