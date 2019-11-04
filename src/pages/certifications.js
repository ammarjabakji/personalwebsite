import React from "react";
import { Link } from "gatsby";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import styles from "./pages.css";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Eduicon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    viewBox="0 0 1000 1000"
    fill="#fff"
  >
    <path d="M948.6 367.7v162.1l34.1 34.1-71.1 74.1-72-71.9 49.3-44.9v-128C679.5 479.6 612.4 506.4 566 527.4s-79.9 20.8-125.9 3.5c-46-17.4-265.2-97.3-374.1-149.4-72.6-34.8-77.3-56.8 1.2-86.3 102.5-38.9 271.9-101.3 361.7-135.3 53.2-21.5 81.3-33.2 130.1-8.7 87.1 36 286.2 110.7 385.2 151.6 86.3 37.5 28.4 49.8 4.4 64.9zM576.1 591.6c50.6-20.9 118.9-55.4 193.3-87.3v256S673.2 862.7 504 862.7c-182.2 0-280.6-102.4-280.6-102.4v-239c57.4 23.4 121.9 43.5 200 70.3 48 17.1 109.1 23 152.7 0z"></path>
  </svg>
);

const edubox = {
  boxShadow:
    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
  position: "relative",
  WebkitTextDecoration: "none",
  textDecoration: "none",
  borderRadius: "0.5rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  color: "var(--theme-ui-colors-white,#fff)",
  background: "linear-gradient(to right,#2a3fcd 0%,#c000ff 100%)",
  WebkitTransition: "all 0.4s cubic-bezier(0.175,0.885,0.32,1.275) !important",
  transition: "all 0.4s cubic-bezier(0.175,0.885,0.32,1.275) !important",
  lineHeight: "1.625",
  fontWeight: "400",
  opacity: "0.90",
  textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",

  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
};

const ModalExamplePage = () => (
  <ModalRoutingContext>
    {({ modal, closeTo }) => (
      <div className="whitebdy">
        <Link className="close" to="/">
          X
        </Link>
        <VerticalTimeline className="vcusomcolor">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 "
            icon={<Eduicon />}
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(190, 46, 252)" }}
            iconStyle={{ background: "rgb(65, 82, 211)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Online Training Courses
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              LinkedIn Learning
            </h4>
            <p>
              Data Wrangling in R, Migrating from REST to GraphQL, Learning the
              R Tidyverse, Learning ECMAScript 6, React: Building Progressive
              Web Apps (PWAs), React: Creating and Hosting a Full-Stack Site,
              Learning React.js, Learning GitHub, Brad Feld on Raising Capital,
              Entrepreneurship: Bootstrapping Your Business, Guy Kawasaki on
              Entrepreneurship, Brad Feld on Validating Your Startup Idea,
              WordPress 5 Essential Training, WordPress: Developing Blocks with
              Gutenberg, WordPress: Building Progressive Themes with WP Rig
              (2018), Learning Git and GitHub, Tech Sense.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid  rgb(65, 82, 211)" }}
            date="2019"
            icon={<Eduicon />}
            iconStyle={{ background: "rgb(65, 82, 211)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Trainer: R Essential
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Carry out ACU's staff training.
            </h4>
            <p></p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 "
            icon={<Eduicon />}
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(196, 44, 254)" }}
            iconStyle={{ background: "rgb(65, 82, 211)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              AMP Roadshow Istanbul
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Google</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(65, 82, 211)" }}
            date="2019"
            icon={<Eduicon />}
            iconStyle={{ background: "rgb(65, 82, 211)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Volunteer IT trainer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Powercoders Istanbul
            </h4>
            <a
              href="https://drive.google.com/file/d/1HAxTi_qfcW1k2KK8AXbvJoYPs-FeuKwu/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate link
            </a>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(196, 44, 254)" }}
            date="2019"
            icon={<Eduicon />}
            iconStyle={{ background: "rgb(65, 82, 211)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Intensive Entrepreneurship Training Program
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              İstanbul Düşünce Akademisi
            </h4>
            <a
              href="https://drive.google.com/file/d/12L_AYhMppiy0-jboTJMAeCmueuBzcF4c/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate link
            </a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018"
            icon={<Eduicon />}
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(65, 82, 211)" }}
            iconStyle={{ background: "rgb(65, 82, 211)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Entrepreneurship Training
            </h3>
            <h4 className="vertical-timeline-element-subtitle">IMECE</h4>
            <a
              href="https://drive.google.com/file/d/14xZ760bd5Q-7PUscSdrwRcArr6j3a1Ep/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate link1
            </a>
            <br />
            <a
              href="https://drive.google.com/file/d/1_mGka4fmgXavsUQ7C3ZqijpIZyeKOSG7/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate link2
            </a>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017"
            icon={<Eduicon />}
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(196, 44, 254) " }}
            iconStyle={{ background: "rgb(65, 82, 211)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Google Cloud Europe Conference
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Google</h4>
            <a
              href="https://drive.google.com/file/d/1vKfZ7qm5wH1tL64N8HLuor9D4pqevxuu/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate link
            </a>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016"
            icon={<Eduicon />}
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(65, 82, 211)" }}
            iconStyle={{ background: "rgb(65, 82, 211)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              E-commerce training Istanbul Maharat Merkezi
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              International Medical Corps
            </h4>
            <a
              href="https://drive.google.com/file/d/12cMujfYLSDehD02TYl-OJltfB2mMuBsN/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate link
            </a>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    )}
  </ModalRoutingContext>
);

export default ModalExamplePage;
