import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider} from "styled-components";
import { DarkTheme } from "./Themes";
import PowerButton from "../subComponents/PowerButton";
import BigTitlte from "../subComponents/BigTitlte";
import Ctesting from "../subComponents/CarousalTesting"

const Div1 = styled.div`
  position: fixed;
  top: 45%;
  left: 36%;
  // transform: translate(0%, 0%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  height: 300vh;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
`;


const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);
  return (
    <ThemeProvider theme={DarkTheme}>
      <Div1>
          <Ctesting />
      </Div1>
      <Box>
        <PowerButton />
        <BigTitlte text="Wissam" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
