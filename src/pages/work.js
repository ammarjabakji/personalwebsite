import React from "react";
import { Link } from "gatsby";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import styles from "./pages.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Workicon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='779.11'
    height='779.11'
    fill='#fff'
    x='0'
    y='0'
    enableBackground='new 0 0 779.11 779.11'
    version='1.1'
    viewBox='0 0 779.11 779.11'
    xmlSpace='preserve'
  >
    <path d='M662.914 632.351h-408.44c-11.49 0-20.806 9.315-20.806 20.806v12.805c0 11.49 9.315 20.81 20.806 20.81h477.262v-54.418l-68.822-.003z'></path>
    <circle cx='211.187' cy='189.625' r='115.19'></circle>
    <path d='M492.234 472.147l-263.969-.146-6.25-.02v-30.632l-.217-25.64c0-61.245-49.651-110.898-110.899-110.898-2.075 0-4.136.07-6.184.182l-.156-.182C46.813 304.813 0 351.625 0 409.372v295.303h222.015V578.876l-2.937-.231c-.209-.019-.261.002-.391.002-15.021 0-29.417-6.324-39.562-17.399l-90.112-98.363a7.693 7.693 0 01.476-10.874 7.694 7.694 0 0110.874.476l90.111 98.362c7.322 7.993 17.648 12.881 28.521 13.039l10.594.152h262.645c25.375 0 45.947-20.571 45.947-45.947.001-25.376-20.572-45.946-45.947-45.946z'></path>
    <path d='M765.197 309.111c-10.744-3.681-22.439 2.049-26.123 12.794l-87.209 254.59H339.803c-11.356 0-20.567 9.206-20.567 20.564s9.211 20.566 20.567 20.566H666.31c6.994 0 13.168-3.503 16.879-8.841a20.493 20.493 0 003.059-5.729L778 335.225c3.67-10.739-2.053-22.435-12.803-26.114z'></path>
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
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
};

const ModalExamplePage = () => (
  <ModalRoutingContext>
    {({ modal, closeTo }) => (
      <div className='whitebdy'>
        <Link className='close' to='/'>
          x
        </Link>
        <VerticalTimeline className='vcusomcolor'>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(212, 21, 89)" }}
            date='2021 - 2024'
            icon={<Workicon />}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>
              React native developer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Abu Dhabi - The Department of Municipalities and Transport
            </h4>
            <p>
              I have made significant contributions to the development of a
              large-scale React Native mobile app for Abu Dhabi City
              Municipality.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(234, 52, 134)" }}
            date='2018 - 2020'
            icon={<Workicon />}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>
              React native developer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>Remote work</h4>
            <p>
              Developing both mobile and web application using react js and
              react native with fully functioned API intergration for a
              different companies. Also, I did coaching and volunteer work.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(212, 21, 89)" }}
            date='2016 - 2017'
            icon={<Workicon />}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>
              Internews Europe
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Web Developer
            </h4>
            <p>Building custom websites UI/UX and more.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(234, 52, 134)" }}
            date='2015 - 2015'
            icon={<Workicon />}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>
              Assistance Coordination Unit
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Web Developer
            </h4>
            <p>
              Building ACU's new website including interactive maps and web
              applications.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2015 - 2015'
            icon={<Workicon />}
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(212, 21, 89)" }}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>
              "Qatar red crescent" and "World Food Programme"
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Technology Officer
            </h4>
            <p>
              I worked for a short amount of time with two of the biggest NGOs
              in the region and helped them improve the web technologies that
              they were using.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(234, 52, 134)" }}
            date='2014 - 2014'
            icon={<Workicon />}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>Soctag</h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Web Developer
            </h4>
            <p>Building web applications using PHP Codeigniter.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2013 - 2014'
            icon={<Workicon />}
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(212, 21, 89)" }}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>
              Vemedya web solutions
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Web Designer & Developer
            </h4>
            <p>
              My main duties included converting from PSD to CSS, HTML and
              jQuery installing and developing WordPress websites.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(234, 52, 134)" }}
            date='2012 - 2013'
            icon={<Workicon />}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>
              Office of Higher Education – University of Aleppo
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
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
            className='vertical-timeline-element--work'
            date='2012 - 2012'
            icon={<Workicon />}
            contentStyle={edubox}
            contentArrowStyle={{ borderRight: "7px solid rgb(212, 21, 89)" }}
            iconStyle={{ background: "rgb(234, 52, 134)", color: "#fff" }}
          >
            <h3 className='vertical-timeline-element-title'>
              Faculty of Economics – University of Aleppo
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>Lecturer</h4>
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
