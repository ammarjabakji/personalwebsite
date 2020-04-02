import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import styles from './skills.module.css'
import css from './logos/CSS.png'
import html5 from './logos/html5.png'
import js from './logos/js.png'
import Bootstrap from './logos/Bootstrap.png'
import react from './logos/react.png'
import gatsby from './logos/gatsby.png'

import php from './logos/php.png'
import nodejs from './logos/nodejs.png'
import ExpressJS from './logos/ExpressJS.png'
import GraphQL from './logos/graphql.png'

import MongoDB from './logos/MongoDB.png'
import mysql from './logos/mysql.png'
import oracle from './logos/oracle.png'

import WordPress from './logos/WordPress.png'
import contentful from './logos/contentful.png'
import Drupal from './logos/Drupal.png'
import woocommerce from './logos/woocommerce.png'

import r from './logos/r.png'
import spss from './logos/spss.png'
import hadoop from './logos/hadoop.png'
import mahout from './logos/mahout.png'

import swift from './logos/swift.png'
import reactnative from './logos/reactnative.png'

import gcloud from './logos/gcloud.png'
import azure from './logos/azure.png'
import aws from './logos/aws.png'

import github from './logos/github.png'
import npm from './logos/npm.png'
import pwa from './logos/pwa.png'
import amp from './logos/amp.png'

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
              <img
                data-sal="slide-up"
                src={html5}
                className={styles.logo}
                alt="html5"
                width="70"
              />
              <img
                data-sal="slide-up"
                src={css}
                className={styles.logo}
                alt="CSS"
                width="70"
              />
              <img
                data-sal="slide-up"
                src={js}
                className={styles.logo}
                alt="Modern Javascript"
                width="120"
              />
              <img
                data-sal="slide-up"
                src={Bootstrap}
                className={styles.logo}
                alt="Bootstrap"
                width="120"
              />
              <img
                data-sal="slide-up"
                src={react}
                className={styles.logo}
                alt="ReactJs"
              />
              <img
                data-sal="slide-up"
                src={gatsby}
                className={styles.logo}
                alt="gatsby"
              />
            </div>

            <h3 className={styles.skillTitle}>Backend</h3>
            <div className={styles.wrap}>
              <img
                data-sal="slide-up"
                src={php}
                className={styles.logo}
                alt="php"
                width="120"
              />
              <img
                data-sal="slide-up"
                src={nodejs}
                className={styles.logo}
                alt="nodejs"
                width="120"
              />
              <img
                data-sal="slide-up"
                src={ExpressJS}
                className={styles.logo}
                alt="ExpressJS"
              />
              {/* <img
                data-sal="slide-up"
                src={GraphQL}
                className={styles.logo}
                alt="GraphQL"
                width="120"
              /> */}
            </div>
            <h3 className={styles.skillTitle}>Databases</h3>
            <div className={styles.wrap}>
              <img
                data-sal="slide-up"
                src={MongoDB}
                className={styles.logo}
                alt="MongoDB"
              />
              <img
                data-sal="slide-up"
                src={mysql}
                className={styles.logo}
                alt="mysql"
                width="120"
              />
              <img
                data-sal="slide-up"
                src={oracle}
                className={styles.logo}
                alt="oracle"
              />
            </div>

            <h3 className={styles.skillTitle}>CMS</h3>
            <div className={styles.wrap}>
              <img
                data-sal="slide-up"
                src={WordPress}
                className={styles.logo}
                alt="WordPress"
              />
              <img
                data-sal="slide-up"
                src={contentful}
                className={styles.logo}
                alt="contentful"
              />
              <img
                data-sal="slide-up"
                src={Drupal}
                className={styles.logo}
                alt="Drupal"
                width="120"
              />
              <img
                data-sal="slide-up"
                src={woocommerce}
                className={styles.logo}
                alt="Woocommerce"
                width="120"
              />
            </div>

            <h3 className={styles.skillTitle}>DATA ANALYSIS</h3>
            <div className={styles.wrap}>
              <img
                data-sal="slide-up"
                src={r}
                className={styles.logo}
                alt="r"
                width="80"
              />
              <img
                data-sal="slide-up"
                src={spss}
                className={styles.logo}
                alt="spss"
                width="80"
              />
              <img
                data-sal="slide-up"
                src={hadoop}
                className={styles.logo}
                alt="hadoop"
              />
              <img
                data-sal="slide-up"
                src={mahout}
                className={styles.logo}
                alt="mahout"
              />
            </div>

            <h3 className={styles.skillTitle}>Mobile Development</h3>
            <div className={styles.wrap}>
              <img
                data-sal="slide-up"
                src={swift}
                className={styles.logo}
                alt="swift"
                width="120"
              />
              <img
                data-sal="slide-up"
                src={reactnative}
                className={styles.logo}
                alt="reactnative"
              />
            </div>

            <h3 className={styles.skillTitle}>Cloud Services</h3>
            <div className={styles.wrap}>
              <img
                data-sal="slide-up"
                src={gcloud}
                className={styles.logo}
                alt="Google cloud"
              />
              <img
                data-sal="slide-up"
                src={azure}
                className={styles.logo}
                alt="Azure"
                width="120"
              />
              <img
                data-sal="slide-up"
                src={aws}
                className={styles.logo}
                alt="Amazon Web Services"
                width="80"
              />
            </div>

            <h3 className={styles.skillTitle}>Other technologies</h3>
            <div className={styles.wrap}>
              <img
                data-sal="slide-up"
                src={github}
                className={styles.logo}
                alt="github"
              />
              <img
                data-sal="slide-up"
                src={npm}
                className={styles.logo}
                alt="npm"
                width="100"
              />
              <img
                data-sal="slide-up"
                src={pwa}
                className={styles.logo}
                alt="pwa"
                width="100"
              />
              <img
                data-sal="slide-up"
                src={amp}
                className={styles.logo}
                alt="amp"
                width="100"
              />
            </div>
          </div>
        </div>
      </div>
    )}
  </ModalRoutingContext>
)

export default ModalskillsPage
