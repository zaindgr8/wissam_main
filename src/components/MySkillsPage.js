import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import PowerButton from "../subComponents/PowerButton";
import blue from "../assets1/screen4/blue.png";
import black from "../assets1/screen4/black.png";
import orange from "../assets1/screen4/orange.png";
import green from "../assets1/screen4/green.png";
import red from "../assets1/screen4/red.png";
import spaceship from "../assets1/spaceship.png";
import bg from "../assets1/screen4/bg1.jpg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import SocialIcons from "../subComponents/SocialIcons";

const Image = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: url(${(props) => props.bg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  object-fit: cover;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SKILLS = styled(NavLink)`
  text-decoration: none;
  z-index: 1;
  display: flex;
  transform: translate(-10%, 0%);

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-left: -120px;
  }
`;

const Side = styled.div`
  font-size: 0.8em;
  color: white;
  position: absolute;
  top: 35%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, 50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
  font-family: sans-serif;
  cursor: pointer;

  /* Media query for small screens */
  @media screen and (max-width: 600px) {
    transform: translate(-45%, -50%) rotate(-90deg);
  }

  /* Media query for large screens */
  @media screen and (min-width: 601px) {
    transform: translate(-50%, -50%) rotate(-90deg);
  }
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(0%, 0%);

  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 768px) {
  }
`;

const Img = styled.img`
  width: 180px;

  @media screen and (max-width: 1200px) {
    width: 100px;
  }

  @media screen and (max-width: 768px) {
    width: 90px;
  }
`;

const ImgSpaceship = styled.img`
  width: 480px;

  @media screen and (max-width: 1200px) {
    width: 350px; // medium screens
  }

  @media screen and (max-width: 768px) {
    width: 280px;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const MySkillsPage = () => {
  const [key, setKey] = React.useState(0);
  React.useEffect(() => {
    const handleResize = () => {
      setKey((prevKey) => prevKey + 1);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <motion.div
      key={key}
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <ThemeProvider theme={lightTheme}>
        <Box>
          <SocialIcons />
          <Side>
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                fontFamily: "cinzel",
              }}
            >
              Click any Perfume to Buy
            </motion.h2>
          </Side>
          <Image bg={bg}></Image>
          {/* <Div0>
            <img src={button} width={250} />
            <Div01 style={{ fontFamily: "cinzel" }}>Our Stars</Div01>
          </Div0> */}
          <DivContainer>
            <Div>
              <ImgSpaceship src={spaceship} />
            </Div>
            <motion.h2
              initial={{
                y: 100,
                x: 100,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SKILLS to="/buynow">
                <Img src={blue} />
                <Img src={black} />
                <Img src={orange} />
                <Img src={green} />
                <Img src={red} />
              </SKILLS>
            </motion.h2>
          </DivContainer>

          <PowerButton />
        </Box>
      </ThemeProvider>
    </motion.div>
  );
};

export default MySkillsPage;
