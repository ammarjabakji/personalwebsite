import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import styles from "./portfolio.module.css";

const ModalportfolioPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      Images: allFile(
        filter: {
          extension: { regex: "/(jpeg|jpg|gif|png)/" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  `);

  console.log(data);
  return (
    <ModalRoutingContext>
      {({ modal, closeTo }) => (
        <div className="fullpage">
          <Link className="close" to="/">
            X
          </Link>
          <h2 className={styles.ptitle}>Portfolio</h2>
          <div className={styles.portfolioWraper}>
            {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
            {data.Images.nodes.map(image => (
              <a
                href={`http://${image.name}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  className={styles.portfolioImg}
                  key={image.id}
                  fluid={image.childImageSharp.fluid}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </ModalRoutingContext>
  );
};

export default ModalportfolioPage;
