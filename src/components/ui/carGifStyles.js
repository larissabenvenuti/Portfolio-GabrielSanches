import styled, { keyframes } from "styled-components";

export const carColors = [
  "/assets/images/CarsGif/twingo_blue.png",
  "/assets/images/CarsGif/twingo_red.png",
  "/assets/images/CarsGif/twingo_yellow.png",
  "/assets/images/CarsGif/twingo_green.png",
];

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  width: 100px;
  height: 100px;
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  background: transparent;
  overflow: visible;
  z-index: 10;
`;

export const Orbit = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${spin} 8s linear infinite;
`;

export const Car = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px; 
  height: auto;
  transform-origin: center;
  transition: opacity 1s ease-in-out;
`;
