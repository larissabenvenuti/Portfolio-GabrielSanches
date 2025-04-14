"use client";

import styled from "styled-components";
import { colors } from "@/contexts/theme";

export const SkillsSection = styled.section`
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: ${colors.text};

  &::before {
    content: "";
    position: absolute;
    top: -80px;
    left: -80px;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 1px solid ${colors.border};
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -40px;
    right: -40px;
    width: 150px;
    height: 150px;
    background: linear-gradient(
      135deg,
      transparent 0%,
      ${colors.glowLight} 100%
    );
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

export const TitleSkills = styled.h1`
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

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`;

export const SkillItem = styled.div`
  background: rgba(255, 255, 255, 0.04);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  color: ${colors.accent};
  border: 1px solid ${colors.border};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.05);
    color: ${colors.text};
    transform: scale(1.05);
    box-shadow: 0 0 10px ${colors.glowLight};
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0.9rem;
    font-size: 0.9rem;
  }
`;
