import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import logo from "../assets1/wisamlogo1.png"
import { BiSupport } from "react-icons/bi";
import bg1 from "../assets1/screen1.gif";
import "./customfont.css"

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow:hidden;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  object-fit: cover;
`;

const MainContainer1 = styled.div`
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

const Container = styled.div`
  
`;

const Contact = styled.a`
  color: white;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  font-size: 10px;

  @media screen and (max-width: 1200px) {
    font-size: 12px; /* Font size for medium screens */
  }

  @media screen and (max-width: 600px) {
    font-size: 1px; /* Font size for small screens */
    top:40px;
  }
`;
const BLOG = styled(NavLink)`
  color: white;
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;
const WORK = styled(NavLink)`
  font-size: 0.8em;
  color: white;
  position: absolute;
  top: 38%;
  left: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  font-family: sans-serif;

  /* Media query for small screens */
  @media screen and (max-width: 600px) {
    transform: translate(-45%, -50%) rotate(-90deg);
  }

  /* Media query for large screens */
  @media screen and (min-width: 601px) {
    transform: translate(-50%, -50%) rotate(-90deg);
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const SKILLS = styled(NavLink)`
  position: absolute;
  color: white;
  text-decoration: none;
  z-index: 1;
  display: flex;
  bottom: 50px;
`;

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;


const Img = styled.img`
  width: 150px;

  @media screen and (max-width: 1200px) {
    width: 180px; // medium screens
  }

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-68%, -68%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  // & > :first-child {
  //   animation: ${rotate} infinite 1.5s linear;
  // }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }

  
  
`;


const Main = () => {
  return (
    
      <MainContainer1>
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          src={bg1}
          autoPlay
          loop
          muted
        />
        <Container>
          {/* <PowerButton /> */}
          <SocialIcons />

          <Center>
            <Img src={logo} width={230} style={{ zIndex: 2, color: "white" }} />

            <span
              style={{
                fontFamily: "cinzel",
                color: "white",
                font: "bold",
                text: "2em",
              }}
            >
              Wissam Serdoun
            </span>
          </Center>

          <Contact target="_blank" href="mailto:info@wissambywissam.com">
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
            >
              Contact Us.  <BiSupport />
            </motion.h2>
          </Contact>
          <BLOG to="/blog"></BLOG>
          <WORK to="/">
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
              Be You, Be Unique, Be Iconic
            </motion.h2>
          </WORK>
          <BottomBar>
            <SKILLS to="/ourproducts">
              <motion.h3
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Buy Now - اشتري الآن
              </motion.h3>
            </SKILLS>
          </BottomBar>
        </Container>
        
      </MainContainer1>

  );
};

export default Main;
