import React, { useState } from "react";
import styled from "styled-components";
import one from "../assets1/2.png";
import two from "../assets1/1.png";
import three from "../assets1/5.png";
import four from "../assets1/3.png";
import five from "../assets1/4.png";
import bl from "../assets1/screen3/button.png";
import lcon from "../assets1/screen3/connector.png";
import circle from "../assets1/screen3/circle.png";
import rcon from "../assets1/screen3/right-con.png";
import rbut from "../assets1/screen3/button-right.png";
import right from "../assets1/screen3/bra1.png";
import left from "../assets1/screen3/bla1.png";
import { motion } from "framer-motion";
import ufo from "../assets1/danish/UFO.png";
import { FaAngleLeft } from "react-icons/fa";


const images = [one, two, three, four, five];

const title = [
  "Millésime 1991",
  "Millésime 1994",
  "Millésime 2000",
  "Millésime 2003",
  "Millésime 2011",
];

const links = [
  "https://buy.stripe.com/7sIg2Z7vndaLc8w3cj",
  "https://buy.stripe.com/5kA6spdTL3AbgoM7sB",
  "https://buy.stripe.com/aEU2c9eXPdaLa0ofZ8",
  "https://buy.stripe.com/00gg2ZbLDgmXdcA3cn",
  "https://buy.stripe.com/9AQ3gddTLb2D3C0eV6",
];

const description = [
  "Millésime 1991: Timeless elegance, modern charm. Harmonious notes, genderless allure. A classic redefined.",
  "Indulge in Millésime 1994, a refined fragrance blending vitality and luxury. Unisex and timeless.",
  "Millésime 2000: A symbol of modern elegance, draped in black opulence. This genderless scent captivates charm.",
  "Millésime 2003: Embrace warmth and vibrancy in a striking orange hue. A fragrance that embodies ambition!",
  "Millésime 2011: Unleash passion and sophistication with this red-clad fragrance, a blend of timeless elegance!",
];

const Wrapper = styled.div`
  width: 21rem;
  height: 35vh;
  // background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 10rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  // transform:translate(-42%, -25%)

  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 768px) {
    // transform: translate(-42%, -25%);
  }
`;

const Div02a = styled.div`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(40%, -100%);
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

  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 250px; /* Set the width of the image container */
  height: auto; /* You can adjust the height as needed */
  transform: translate(70%, -20%);

  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Image2 = styled.img`
  width: 75%;
  height: auto;
  transform: translate(25%, 0%);
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 60%;
  left: 55%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title2 = styled.h2`
  color: white; /* Set the text color */
  font-size: 0.7em;
  transform: translate(10%, 0%);
  width: 100px;
  /* Add additional styles as needed */
`;

const Div1 = styled.div`
  transform: translate(-75%, -50%);
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h2`
  position: absolute;
  color: white;
  font-size: 0.9em;
`;

const Div0 = styled.div`
  transform: translate(-124%, -110%);
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1200px) {
    transform: translate(-80%, -150%);
  }

  @media screen and (max-width: 768px) {
    transform: translate(-80%, -150%);
  }
`;

const Div3 = styled.div`
  position: absolute;
  z-index: 1;
  width: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -15%;
  gap: 105px;

  @media screen and (max-width: 1200px) {
    // bottom: 0px;
    // left: 0px;
  }

  @media screen and (max-width: 768px) {
    // transform:translate(-12%, 95%);
  }
`;

const Div01a = styled.div`
  position: fixed;
  bottom: 30px;
  right: 75px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  z-index: -10;
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 768px) {
  }
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(0%, -25%);
  transition: all 0.5s ease;

  @media screen and (max-width: 1200px) {
    transform: translate(-40%, -25%);
  }
  @media screen and (max-width: 768px) {
    transform: translate(-40%, -25%);
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: -15%;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  @media screen and (max-width: 1200px) {
    // bottom: 0px;
    // left: 0px;
  }

  @media screen and (max-width: 768px) {
    // transform: translate(180%, 10%);
  }
`;

const Link = styled.a`
  // background: black;
  color: white;
  z-index:10;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
    ring-4;
    ring-cyan-300;
  }
   &:hover {
    // background: linear-gradient(to bottom right, #68d391, #4dabf7, #4299e1);
    box-shadow: 0 12px 20px -10px rgba(0, 0, 0, 0.2), 0 4px 20px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 0, 0, 0.2);
  }
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5em;
  border-radius: 10px;
  font-size: 1.2em;

  ${Wrapper}:hover & {
   
  }
`;

const Img = styled.img`
  width: 450px;

  @media screen and (max-width: 1200px) {
    width: 400px; // medium screens
  }

  @media screen and (max-width: 768px) {
    width: 320px;
  }
`;

const DivUfo = styled.div`
  position: fixed;
  cursor: pointer;
  z-index: 5;
  top: -60%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;

  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 768px) {
  }
`;

const Carousel = (props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <Wrapper>
      <DivContainer>
        <DivUfo>
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
            <Img src={ufo} />
          </motion.h2>
        </DivUfo>
        <Image src={images[currentImage]} />
        <Div01a>
          <img src={circle} width={180} />
        </Div01a>
        <Div3>
          <img src={left} width={40} onClick={prevImage} />
          <img src={right} onClick={nextImage} width={40} />
        </Div3>

        <Div02a>
          <img src={rcon} width={100} />
        </Div02a>
        <Div0>
          <img src={bl} width={150} />
          <Title style={{ fontFamily: "Cinzel" }}>{title[currentImage]}</Title>
        </Div0>
        <Div1>
          <img src={lcon} width={100} />
        </Div1>
        <ImageContainer>
          <Image2 src={rbut} width={150} alt="Your Image" />
          <TextOverlay>
            <Title2 style={{ fontFamily: "Cinzel" }}>
              {description[currentImage]}
            </Title2>
          </TextOverlay>
        </ImageContainer>
        <Footer>
          <Link href={links[currentImage]} target="_blank">
            Buy Now
          </Link>
        </Footer>
      </DivContainer>
    </Wrapper>
  );
};

export default Carousel;
