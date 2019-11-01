/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import SVG from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
import ProjectsMDX from "../sections/projects.mdx";
import ProjectCard from "../components/project-card";

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

const Projects = ({ offset }: { offset: number }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={2}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={2}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` }
          }}
        >
          {/* <ProjectsMDX /> */}
          <ProjectCard
            title="Education"
            link="education"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            My academic journey.
          </ProjectCard>
          <ProjectCard
            title="WORK EXPERIENCE"
            link="work"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Work history.
          </ProjectCard>
          <ProjectCard
            title="TECHNICAL SKILLS"
            link="skills"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Technologies that I quite good at.
          </ProjectCard>
          <ProjectCard
            title="PORTFOLIO"
            link="portfolio"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            List of website that I built in the past.
          </ProjectCard>
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown>
        <SVG icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
        <SVG icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <SVG
          icon="triangle"
          width={8}
          stroke
          color="icon_orange"
          left="25%"
          top="5%"
        />
        <SVG
          icon="circle"
          hiddenMobile
          width={24}
          color="icon_brightest"
          left="17%"
          top="60%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_green"
          left="20%"
          top="90%"
        />
        <SVG
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="90%"
          top="30%"
        />
        <SVG
          icon="circle"
          width={16}
          color="icon_yellow"
          left="70%"
          top="90%"
        />
        <SVG
          icon="triangle"
          hiddenMobile
          width={16}
          stroke
          color="icon_teal"
          left="18%"
          top="75%"
        />
        <SVG
          icon="circle"
          width={6}
          color="icon_brightest"
          left="75%"
          top="10%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_green"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG
        icon="circle"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="4%"
        top="20%"
      />
      <SVG icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
      <SVG
        icon="hexa"
        width={16}
        stroke
        color="icon_red"
        left="75%"
        top="30%"
      />
      <SVG
        icon="hexa"
        width={8}
        stroke
        color="icon_yellow"
        left="80%"
        top="70%"
      />
    </Divider>
  </div>
);

export default Projects;
