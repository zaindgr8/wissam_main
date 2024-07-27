import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import bl from "../assets1/screen3/button.png";
import lcon from "../assets1/screen3/connector.png";
import rcon from "../assets1/screen3/right-con.png";
import rbut from "../assets1/screen3/button-right.png";

const Box = styled(motion.li)`
width: 16rem;
height: 30vh;
// background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 1.5rem 2rem;
margin-right: 10rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
// border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
// background-color: ${props => props.theme.body};
// color:${props => props.theme.text};
// border: 1px solid ${props => props.theme.text};

}
`
const Title = styled.h2`
  position: absolute;
  color: white;
  font-size: 0.9em;
`;

const Image = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;

const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  transform: translate(-8%, -60%);
  gap: 16px;
`;

const Link = styled.a`
  background: linear-gradient(to right, #68d391, #4dabf7, #4299e1);
  color: #fff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
    ring-4;
    ring-cyan-300;
  }
   &:hover {
    background: linear-gradient(to bottom right, #68d391, #4dabf7, #4299e1);
    box-shadow: 0 12px 20px -10px rgba(0, 0, 0, 0.2), 0 4px 20px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 0, 0, 0.2);
  }
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 10px;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;
const Div0 = styled.div`
  transform: translate(-105%, 90%);
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
`;

const Div1 = styled.div`
  transform: translate(-22%, 40%);
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
`;


const Div02a = styled.div`
  transform: translate(125%, 120%);
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 250px; /* Set the width of the image container */
  height: auto; /* You can adjust the height as needed */
  transform: translate(68%, -20%);
`;

const Image2 = styled.img`
  width: 100%;
  height: auto;
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
  font-size: 1em;
  /* Add additional styles as needed */
`;


const Card = (props) => {

  const { name, description, image} = props.data;

    return (
      <Box>
        <Div0>
          <img src={bl} width={150} />
          <Title style={{ fontFamily: "Cinzel" }}>{name}</Title>
        </Div0>
        <ImageContainer>
          <Image2 src={rbut} alt="Your Image" />
          <TextOverlay>
            <Title2 style={{ fontFamily: "Cinzel" }}>{description}</Title2>
          </TextOverlay>
        </ImageContainer>
        <Div02a>
          <img src={rcon} width={100} />
        </Div02a>
        <Div1>
          <img src={lcon} width={100} />
        </Div1>
        <Image>
          <img src={image} alt={name} width={200} />
        </Image>
        <Footer>
    
          <Link
            href="https://buy.stripe.com/dR6eYVeXP0nZ3C0000"
            target="_blank"
          >
            Buy Now
          </Link>
        </Footer>
      </Box>
    );
}

export default Card
