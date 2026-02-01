import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";

// Outer wrapper
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  width: 100%;
  position: relative;
  /* Adjust padding for mobile */
  padding: 6rem 1rem; 

  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }
`;

const Main = styled(motion.ul)`
  display: grid;
  /* Default: 1 column for mobile */
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 4rem 2rem;
  list-style: none;
  justify-items: center;

  /* Tablet: 2 columns */
  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Desktop: 3 columns */
  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px; 
    margin: 0 auto;
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 60px;
  height: 60px;
  z-index: 1;
  animation: rotate 6s linear infinite;

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
    right: 2rem;
    bottom: 2rem;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <BigTitlte text="WORK" top="2%" right="10%" />

        <Main variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>

        <Rotate>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
