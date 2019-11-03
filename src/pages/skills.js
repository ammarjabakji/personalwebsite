import React from "react";
import { Link } from "gatsby";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import styles from "./skills.module.css";
import css from "./logos/CSS.png";
import html5 from "./logos/html5.png";
import js from "./logos/js.png";
import Bootstrap from "./logos/Bootstrap.png";
import react from "./logos/react.png";
import gatsby from "./logos/gatsby.png";

import php from "./logos/php.png";
import nodejs from "./logos/nodejs.png";
import ExpressJS from "./logos/ExpressJS.png";
import GraphQL from "./logos/GraphQL.png";
import WordPress from "./logos/WordPress.png";
import contentful from "./logos/contentful.png";
import Drupal from "./logos/Drupal.png";

const ModalskillsPage = () => (
  <ModalRoutingContext>
    {({ modal, closeTo }) => (
      <div className="whitebdy">
        <Link className={styles.close} to="/">
          X
        </Link>
        <div className={styles.container}>
          <div className={styles.sectionSkill}>
            <h3 className={styles.skillTitle}>Frontend</h3>
            <div className={styles.wrap}>
              <img src={html5} className={styles.logo} alt="html5" width="70" />
              <img src={css} className={styles.logo} alt="CSS" width="70" />
              <img
                src={js}
                className={styles.logo}
                alt="Modern Javascript"
                width="120"
              />
              <img
                src={Bootstrap}
                className={styles.logo}
                alt="Bootstrap"
                width="120"
              />
              <img
                src={react}
                className={styles.logo}
                alt="ReactJs"
                width="100"
              />
              <img src={gatsby} className={styles.logo} alt="gatsby" />
            </div>

            <h3 className={styles.skillTitle}>Backend</h3>
            <div className={styles.wrap}>
              <img src={php} className={styles.logo} alt="php" width="120" />
              <img
                src={nodejs}
                className={styles.logo}
                alt="nodejs"
                width="120"
              />
              <img src={ExpressJS} className={styles.logo} alt="ExpressJS" />
              <img
                src={GraphQL}
                className={styles.logo}
                alt="GraphQL"
                width="200"
              />
            </div>

            <h3 className={styles.skillTitle}>CMS</h3>
            <div className={styles.wrap}>
              <img src={WordPress} className={styles.logo} alt="WordPress" />
              <img src={contentful} className={styles.logo} alt="contentful" />
              <img src={Drupal} className={styles.logo} alt="Drupal" />
              <img src={Drupal} className={styles.logo} alt="Drupal" />
            </div>

            <h3 className={styles.skillTitle}>DATA ANALYSIS</h3>
            <div className={styles.wrap}></div>
          </div>
        </div>
      </div>
    )}
  </ModalRoutingContext>
);

export default ModalskillsPage;
