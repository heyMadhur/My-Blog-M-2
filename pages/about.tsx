import React from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import utilStyles from "@/styles/Utilities.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.content}>
        <h1 className={`${utilStyles.headFont} ${styles.heading}`}>
          About Blogger&apos;s Blog
        </h1>
        <div className={styles.introSec}>
          <h2 className={utilStyles.headFont}>Introduction</h2>
          <p className={utilStyles.textFont}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            aliquam exercitationem sint cupiditate labore tempora temporibus
            perferendis soluta, porro vero saepe neque, dolor fugit? Reiciendis
            consectetur ex officia, sit eveniet quia, hic fuga ea omnis eos
            voluptatem alias adipisci non laborum soluta saepe consequuntur.
            Vero nihil quibusdam voluptates ullam assumenda dicta sit laboriosam
            harum facilis quia doloribus illum pariatur recusandae sapiente
            sint, sed expedita! Totam labore debitis fugit nostrum dolor
            molestias quidem quo reiciendis illo quasi maxime placeat
            accusantium error quae dolorum exercitationem veniam autem nihil,
            saepe in enim officiis iste voluptatibus! Commodi placeat laudantium
            nesciunt laboriosam, culpa quos deserunt!
          </p>
        </div>
        <div className={styles.servicesSec}>
          <h2 className={utilStyles.headFont}>Services Offered</h2>
          <p className={utilStyles.textFont}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea
            quia ducimus possimus commodi culpa consequatur officiis. Fugiat
            placeat labore dolore, quo nam, excepturi beatae impedit error
            perferendis suscipit accusantium, molestias cumque in. Perspiciatis
            iure cum, placeat quisquam sed culpa beatae! Quo repellendus qui
            placeat esse, in porro vel natus.
          </p>
          <p className={utilStyles.textFont}>
            We Offer the following the services-:
          </p>
          <ul className={styles.servicesList}>
            <li className={utilStyles.textFont}>Service 1</li>
            <li className={utilStyles.textFont}>Service 2</li>
            <li className={utilStyles.textFont}>Service 3</li>
            <li className={utilStyles.textFont}>Service 4</li>
            <li className={utilStyles.textFont}>Service 5</li>
            <li className={utilStyles.textFont}>Service 6</li>
            <li className={utilStyles.textFont}>Service 7</li>
            <li className={utilStyles.textFont}>Service 8</li>
          </ul>
        </div>
        <div className={styles.contactSec}>
          <h2 className={utilStyles.headFont}>Contact Us</h2>
          <p className={utilStyles.textFont}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            doloribus temporibus ab maxime praesentium, in explicabo, doloremque
            autem recusandae voluptatibus quas, illo ratione rerum debitis.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
