"use client";

import styled from "styled-components";
import { colors } from "@/contexts/theme";

export const KevinSection = styled.section`
  padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 3rem);
  max-width: min(1200px, 90%);
  margin: 0 auto;
  position: relative;
  color: ${colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: min(-5vw, -50px);
    right: min(-5vw, -50px);
    width: min(400px, 80vw);
    height: min(400px, 80vw);
    border: 1px solid ${colors.border};
    border-radius: 50%;
    z-index: -1;
    transform: rotate(-15deg);
    opacity: 0.7;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: min(-3vw, -30px);
    left: min(-3vw, -30px);
    width: min(200px, 40vw);
    height: min(200px, 40vw);
    background: linear-gradient(
      135deg,
      transparent 0%,
      ${colors.glowLight} 100%
    );
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: -1;
    opacity: 0.5;
    transition: all 0.6s ease;
  }

  &:hover::before {
    transform: rotate(5deg) scale(1.02);
  }

  &:hover::after {
    transform: rotate(10deg);
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    &::before {
      opacity: 0.5;
    }
    &::after {
      opacity: 0.3;
    }
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
  }
`;

export const TitleKevin = styled.h1`
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: clamp(1.5rem, 4vw, 2rem);
  color: ${colors.accent};
  font-weight: 500;
  
  &:before {
    content: '/ ';
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 280px) 1fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: start;
  width: 100%;

  @media (max-width: 992px) {
    grid-template-columns: minmax(180px, 240px) 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
`;

export const Photo = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 18px;
  overflow: hidden;
  border: 2px solid ${colors.border};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  will-change: transform;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
    
    img {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    max-width: 320px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-width: 260px;
    aspect-ratio: 3/4;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2rem);
  align-self: center;
`;

export const Paragraph = styled.p`
  font-size: clamp(1rem, 1.15vw, 1.15rem);
  line-height: 1.8;
  color: ${colors.textMuted};
  margin: 0;
  position: relative;
  padding-left: 2rem;
  text-align: left;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5em;
    height: 60%;
    width: 4px;
    background: linear-gradient(
      to bottom,
      ${colors.accentGradientStart},
      ${colors.accentGradientEnd}
    );
    border-radius: 3px;
    transition: height 0.3s ease;
  }

  &:hover::before {
    height: 80%;
  }

  @media (max-width: 992px) {
    line-height: 1.7;
    padding-left: 1.75rem;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.65;
    padding-left: 0;
    text-align: center;

    &::before {
      display: none;
    }
  }

  @media (max-width: 480px) {
    text-align: left;
    font-size: 1rem;
  }
`;