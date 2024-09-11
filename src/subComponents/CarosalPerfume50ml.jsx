import React, { useState } from "react";
import styled from "styled-components";
import one from "../assets1/Soleil.png";
import two from "../assets1/Orionis.png";
import three from "../assets1/Centauri.png";
import four from "../assets1/Cirius.png";
import five from "../assets1/Lyrae.png";
import bl from "../assets1/screen3/button.png";
import lcon from "../assets1/screen3/connector.png";
import circle from "../assets1/screen3/circle.png";
import rcon from "../assets1/screen3/right-con.png";
import rbut from "../assets1/screen3/button-right.png";
import right from "../assets1/screen3/bra1.png";
import left from "../assets1/screen3/bla1.png";
import { motion } from "framer-motion";
import ufo from "../assets1/danish/UFO.png";
import onered from "../assets1/red.png";
import fourblue from "../assets1/blue1.png";
import fivegreen1 from "../assets1/green1.png";
import threeblack1 from "../assets1/black1.png";
import twoyellow from "../assets1/yellow.png";

// Carousel images and titles
const images = [one, two, three, four, five];
const title = ["Soleil", "Orionis", "Centauri", "Cirius", "Lyrae"];

// Links for each perfume
const links = [
  "https://buy.stripe.com/7sIg2Z7vndaLc8w3cj",
  "https://buy.stripe.com/5kA6spdTL3AbgoM7sB",
  "https://buy.stripe.com/aEU2c9eXPdaLa0ofZ8",
  "https://buy.stripe.com/00gg2ZbLDgmXdcA3cn",
  "https://buy.stripe.com/9AQ3gddTLb2D3C0eV6",
];

// Descriptions for each perfume
const description = [
  "Soleil: Cardamom, grapefruit, jasmine, oud, leather, tonka, vanilla, musk.",
  "Orionis: Mandarine, aloe vera, sandalwood, rice wood.",
  "Centauri: Amber, oud, spices, roses, fruits, leather, woods.",
  "Cirius: Tonka bean, vanilla, amberwood, white musk.",
  "Lyrae: Woods, aromatic, leather, patchouli, tobacco.",
];

// Corresponding side images for each perfume
const sideImages = [onered, twoyellow, threeblack1, fourblue, fivegreen1];

// Styled components
const Wrapper = styled.div`
  width: 21rem;
  height: 35vh;
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 10rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s ease;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Div02a = styled.div`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(40%, -100%);
  background-color: transparent;
  cursor: pointer;
  z-index: 2;
  transition: all 1s ease;
`;

const SideImage = styled.img`
  position: absolute;
  top: 70%;
  ${(props) => (props.position === "right" ? "right: 80%;" : "left: 10%;")}
  transform: translateY(-50%);
  width: 170px;
  z-index: 2;
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 250px;
  height: auto;
  transform: translate(70%, -20%);
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
  color: white;
  font-size: 0.7em;
  transform: translate(10%, 0%);
  width: 100px;
`;

const Div1 = styled.div`
  transform: translate(-75%, -50%);
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
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
`;

const Div01a = styled.div`
  position: fixed;
  bottom: 30px;
  right: 75px;
  background-color: transparent;
  cursor: pointer;
  z-index: -10;
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(0%, -25%);
  transition: all 0.5s ease;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: -15%;
  background-color: transparent;
  cursor: pointer;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
`;

const Link = styled.a`
  color: white;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
    ring-4;
    ring-cyan-300;
  }
  &:hover {
    box-shadow: 0 12px 20px -10px rgba(0, 0, 0, 0.2),
      0 4px 20px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 0, 0, 0.2);
  }
  text-decoration: none;
  padding: 0.5em;
  border-radius: 10px;
  font-size: 1.2em;
`;

const Img = styled.img`
  width: 450px;
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
`;

const CarosalPerfume50ml = (props) => {
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
        {/* Display corresponding side image */}
        <SideImage
          src={sideImages[currentImage]}
          position="right"
          alt="Side Image"
        />

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
          <img src={circle} alt="" width={180} />
        </Div01a>
        <Div3>
          <img src={left} alt="" width={40} onClick={prevImage} />
          <img src={right} alt="" onClick={nextImage} width={40} />
        </Div3>

        <Div02a>
          <img src={rcon} alt="" width={100} />
        </Div02a>
        <Div0>
          <img src={bl} alt="" width={150} />
          <Title style={{ fontFamily: "Cinzel" }}>{title[currentImage]}</Title>
        </Div0>
        <Div1>
          <img src={lcon} alt="" width={100} />
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

export default CarosalPerfume50ml;
