"use client";

import styled from "styled-components";
import { colors } from "@/contexts/theme";

export const AboutSection = styled.section`
  padding: 4rem 1.5rem;
  max-width: 1200px;
  position: relative;
  color: ${colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    border: 1px solid ${colors.border};
    border-radius: 50%;
    z-index: -1;
    transform: rotate(-15deg);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    background: linear-gradient(
      135deg,
      transparent 0%,
      ${colors.glowLight} 100%
    );
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: -1;
  }

  @media (max-width: 992px) {
    padding: 5rem 2rem;

    &::before {
      width: 300px;
      height: 300px;
    }

    &::after {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;

    &::before {
      width: 200px;
      height: 200px;
    }

    &::after {
      width: 100px;
      height: 100px;
    }
  }
`;

export const TitleAbout = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
  text-align: center;
  background: linear-gradient(
    90deg,
    ${colors.accentGradientStart},
    ${colors.accentGradientEnd}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: skew(-5deg);

  &::before {
    content: "";
    position: absolute;
    left: -1rem;
    top: 50%;
    width: 5px;
    height: 70%;
    background: ${colors.accent};
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;

    &::before {
      left: -0.5rem;
      width: 3px;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 992px) {
    gap: 4rem;
    grid-template-columns: 240px 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

export const Photo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  overflow: hidden;
  border: 2px solid ${colors.border};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 768px) {
    max-width: 320px;
    margin: 0 auto;
    aspect-ratio: 4/5;
  }

  @media (max-width: 480px) {
    max-width: 280px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: ${colors.textMuted};
  margin: 0;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.75em;
    height: 60%;
    width: 3px;
    background: linear-gradient(
      to bottom,
      ${colors.accentGradientStart},
      ${colors.accentGradientEnd}
    );
    border-radius: 3px;
  }

  @media (max-width: 992px) {
    font-size: 1.1rem;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.65;
    padding-left: 0;
    text-align: left;

    &::before {
      display: none;
    }
  }
`;
