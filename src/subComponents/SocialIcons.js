import { motion } from "framer-motion";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { Facebook } from "../components/AllSvgs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: white;
`;
const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: "white", fontSize: "1.8em" }}
          target="_blank"
          href={"https://www.tiktok.com/@wissambywissam?lang=en"}
        >
          <BsTiktok />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: "white", fontSize: "1.8em" }}
          target="_blank"
          href={"https://www.instagram.com/wissambywissam/"}
        >
          <AiFillInstagram />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: "white" }}
          target="_blank"
          href={"https://www.facebook.com/wissambywissam1/"}
        >
          <Facebook width={25} height={25} />
        </a>
      </motion.div>

      <Line
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
