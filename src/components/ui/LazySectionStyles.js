"use client";

import styled, { keyframes } from "styled-components";

export const slideInDiagonal = keyframes`
  0% {
    transform: translate(-100px, -100px) rotate(-5deg) scale(0.95);
    opacity: 0;
    filter: blur(2px);
  }
  70% {
    opacity: 0.7;
    filter: blur(1px);
  }
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 1;
    filter: blur(0);
  }
`;

export const floatEffect = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const SectionWrapper = styled.div`
  margin-bottom: 40px;
  min-height: 100vh;
  position: relative;
  width: 100%;
  perspective: 1000px;
  transform-style: preserve-3d;
  
  &.loaded {
    animation: 
      ${slideInDiagonal} 0.9s cubic-bezier(0.5, 0, 0.2, 1.5) forwards,
      ${floatEffect} 6s ease-in-out infinite 1s;
    
    & > * {
      transform: translateZ(20px);
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.5s;
    pointer-events: none;
  }

  &.loaded:after {
    opacity: 1;
  }
`;