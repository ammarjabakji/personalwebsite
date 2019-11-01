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
  background: "linear-gradient(to right,#662D8C 0%,#ED1E79 100%)",
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
      <div>
        <Link className="close" to="/">
          X
        </Link>
        <VerticalTimeline className="vcusomcolor">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(234, 52, 134)" }}
            date="2015 - present"
            icon={<Eduicon />}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Self-employed Entrepreneur
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Freelancer</h4>
            <p>
              Developing websites and database applications for many people from
              all over the world. Also, I do coaching and volunteer work.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(212, 21, 89)" }}
            date="2016 - 2017"
            icon={<Eduicon />}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Internews Europe
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Web Developer
            </h4>
            <p>Building custom websites UI/UX and more.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(234, 52, 134)" }}
            date="2015 - 2015"
            icon={<Eduicon />}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Assistance Coordination Unit
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Web Developer
            </h4>
            <p>
              Building ACU's new website including interactive maps and web
              applications.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2015"
            icon={<Eduicon />}
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(212, 21, 89)" }}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              "Qatar red crescent" and "World Food Programme"
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Technology Officer
            </h4>
            <p>
              I worked for a short amount of time with two of the biggest NGOs
              in the region and helped them improve the web technologies that
              they were using.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(234, 52, 134)" }}
            date="2014 - 2014"
            icon={<Eduicon />}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Soctag</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Web Developer
            </h4>
            <p>Building web applications using PHP Codeigniter.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013 - 2014"
            icon={<Eduicon />}
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(212, 21, 89)" }}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Vemedya web solutions
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Web Designer & Developer
            </h4>
            <p>
              My main duties included converting from PSD to CSS, HTML and
              jQuery installing and developing WordPress websites.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(234, 52, 134)" }}
            date="2012 - 2013"
            icon={<Eduicon />}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Office of Higher Education – University of Aleppo
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Database Administrator
            </h4>
            <p>
              Develop and administrate the online admission system at the
              Admissions Office of Higher Education at the University of Aleppo.
              My main responsibilities were developing and maintain the system,
              backup and recovery, data entry, managing permissions and building
              reports.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - 2012"
            icon={<Eduicon />}
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(212, 21, 89)" }}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Faculty of Economics – University of Aleppo
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Lecturer</h4>
            <p>
              I worked as a teaching assistant at the University of Aleppo
              delivering two advanced modules: Data Structure and Information
              Systems.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    )}
  </ModalRoutingContext>
);

export default ModalExamplePage;
