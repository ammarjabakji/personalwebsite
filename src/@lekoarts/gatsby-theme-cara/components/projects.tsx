/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import SVG from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";
import ProjectsMDX from "../sections/projects.mdx";
import ProjectCard from "../components/project-card";
import eduimg from "./edu.png";
import workimg from "./work.png";
import skillsimg from "./skills.png";
import portf from "./portf.png";
import cert from "./cert.png";

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
            modal={{ modal: true }}
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            icon={`url(${eduimg}) no-repeat center right `}
          >
            My academic journey.
          </ProjectCard>
          <ProjectCard
            title="WORK EXPERIENCE"
            link="work"
            modal={{ modal: true }}
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            icon={`url(${workimg}) no-repeat center right `}
          >
            Work history.
          </ProjectCard>
          <ProjectCard
            title="TECHNICAL SKILLS"
            link="skills"
            modal={{ modal: true }}
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            icon={`url(${skillsimg}) no-repeat center right `}
          >
            Technologies that I quite good at.
          </ProjectCard>
          <ProjectCard
            title="PORTFOLIO"
            link="portfolio"
            bg="linear-gradient(to right,#221c7f 0%,#55eca6 100%)"
            icon={`url(${portf}) no-repeat center right `}
          >
            List of website that I built in the past.
          </ProjectCard>
          <ProjectCard
            title="CERTIFICATIONS"
            link="certifications"
            modal={{ modal: true }}
            bg="linear-gradient(to right,#2a3fcd 0%,#c000ff 100%)"
            icon={`url(${cert}) no-repeat center right `}
          >
            List of attended courses, coaching, and volunteer work.
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
