import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import SocialIcons from "../subComponents/SocialIcons";
import logo from "../assets1/wisamlogo1.png";
import { BiSupport } from "react-icons/bi";
import bg1 from "../assets1/screen1.gif";
import "./customfont.css";

// Main container for the background and layout
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

// Container for central components
const Container = styled.div``;

// Contact button styling
const Contact = styled.a`
  color: white;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  font-size: 10px;

  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    font-size: 1px;
    top: 40px;
  }
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

  @media screen and (max-width: 600px) {
    transform: translate(-45%, -50%) rotate(-90deg);
  }

  @media screen and (min-width: 601px) {
    transform: translate(-50%, -50%) rotate(-90deg);
  }
`;

// Bottom bar for the Buy Now section and buttons
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// Flex container for Perfume buttons with updated styling for responsiveness
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* Adds space between buttons */
  margin-top: 20px;

  // Set background color to black and text to white for the perfume buttons
  a {
    background-color: black;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    gap: 10px; /* Reduce gap on smaller screens */
    margin-top: 10px; /* Reduce margin on mobile */
    flex-direction: column; /* Stack buttons vertically on mobile */
    a {
      padding: 8px 15px; /* Adjust button size for mobile */
      font-size: 0.8em; /* Adjust text size for mobile */
    }
  }
`;

// Buy Now button styling for the 'Buy Now' button without black background
const BuyNowButton = styled(NavLink)`
  color: white;
  text-decoration: none;
  z-index: 1;
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 5px;

  &:hover {
    transform: none;
  }

  &:active {
    transform: none;
  }
`;

// Skills (Buy Now) section styling with black background for Perfume buttons and updated with white border and rounded corners
const SKILLS = styled(NavLink)`
  color: white;
  text-decoration: none;
  z-index: 1;
  display: flex;
  align-items: center;
  background-color: black;
  padding: 10px 20px;
  border-radius: 30px; /* Makes the button rounded */
  border: 2px solid white; /* Adds a white border */

  &:hover {
    transform: none;
  }

  &:active {
    transform: none;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 15px; /* Adjust button padding for mobile */
    font-size: 0.8em; /* Adjust text size for mobile */
  }
`;

// Image styling for the logo
const Img = styled.img`
  width: 150px;

  @media screen and (max-width: 1200px) {
    width: 180px;
  }

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

// Center button for logo and text
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
  margin-left: 30px;
  transition: all 1s ease;

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const Main = () => {
  return (
    <MainContainer1>
      <img
        alt=""
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
        <SocialIcons />

        <Center>
          <Img src={logo} width={230} style={{ zIndex: 2, color: "white" }} />
          <span
            style={{
              fontFamily: "cinzel",
              color: "white",
              fontWeight: "bold",
              fontSize: "2em",
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
            Contact Us <BiSupport />
          </motion.h2>
        </Contact>

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
          {/* Updated Buy Now button without black background */}
          <BuyNowButton to="/">
            <motion.h3
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              Buy Now - اشتري الآن
            </motion.h3>
          </BuyNowButton>

          {/* Buttons for Perfume 50ML and Perfume 100ML with white border and rounded corners */}
          <ButtonContainer>
            <SKILLS to="/perfume50ml">
              <motion.h3
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                Perfumes 50ML
              </motion.h3>
            </SKILLS>

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
                whileTap={{ scale: 0.9 }}
              >
                Perfumes 100ML
              </motion.h3>
            </SKILLS>
          </ButtonContainer>
        </BottomBar>
      </Container>
    </MainContainer1>
  );
};

export default Main;
