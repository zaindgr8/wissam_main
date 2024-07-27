import React, { useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: absolute;
  justify-content: space-between;
  display: flex;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const PrevButton = styled(CarouselButton)`
  left: 10px;
`;

const NextButton = styled(CarouselButton)`
  right: 10px;
`;

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === children.length - 1 ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? children.length - 1 : currentSlide - 1
    );
  };

  return (
    <CarouselContainer>
      <SlideContainer
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {children.map((child, index) => (
          <Slide key={index}>{child}</Slide>
        ))}
      </SlideContainer>
      <PrevButton onClick={prevSlide}>&#8249;</PrevButton>
      <NextButton onClick={nextSlide}>&#8250;</NextButton>
    </CarouselContainer>
  );
};

export default Carousel;
