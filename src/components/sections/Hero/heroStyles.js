"use client";

import styled from "styled-components";
import { colors } from "@/contexts/theme";

export const HeroSection = styled.div`
  color: ${colors.text};
  min-height: 100vh;
  padding: 4.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Orbitron", sans-serif;
  background: ${colors.background};

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    height: 100vh;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
    height: 100vh;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  background: linear-gradient(
    90deg,
    ${colors.accentGradientStart},
    ${colors.accentGradientEnd}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.75rem;
  color: ${colors.text};
  text-shadow: 0 0 2px ${colors.glowLight};
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const Bio = styled.p`
  line-height: 1.8;
  max-width: 700px;
  margin-bottom: 3rem;
  text-align: center;
  color: ${colors.textMuted};
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 1rem;
    width: 100%;
  }
`;

export const Button = styled.a`
  background: ${colors.background};
  border: 1px solid ${colors.accent};
  padding: 0.75rem 2rem;
  border-radius: 12px;
  color: ${colors.accent};
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  text-align: center;

  &:focus,
  &:hover {
    transform: scale(1.03);
    background: ${colors.accent};
    color: #fff;
  }

  &:focus {
    outline: 3px solid ${colors.accent};
    outline-offset: 4px;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1.5rem;
    width: 100%;
  }
`;
