import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Card</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={styles.main}>
        <div className={styles.card}>
          <div>
            <img className={styles.headimg} src="image-equilibrium.jpg"></img>
          </div>
          <div>
            <div className={styles.headtitle}>
            <h3 className="mx-0 my-3 row">Equilibrium #3429</h3>
            </div>
            <p className={styles.description}>
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div>
              <div className="row">
                <span className="col-7 py-auto">
                  <img
                    className={styles.balicon}
                    id={styles.coin}
                    src="icon-ethereum.svg"
                  ></img>
                  <p className={styles.balance}>0.041 ETH</p>
                </span>
                <span className="col-5 py-auto px-0">
                  <img className={styles.timeicon} src="icon-clock.svg"></img>
                  <p className={styles.time}>3 days left</p>
                </span>
              </div>
            </div>
          </div>
          <hr className={styles.line}></hr>
          <div className="row">
            {/* <span className="col m-1"></span> */}
            <span className="col-12 my-auto align-text-left">
              <img className={styles.avatar} src="image-avatar.png"></img>
              <span className={styles.creation}>Creation of </span><span className={styles.creator}>Jules Wyvern</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
