import styled from "styled-components";
import { colors } from "@/contexts/theme";

export const SkillsSection = styled.section`
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: ${colors.text};
  background: ${colors.backgroundAlt};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      ${colors.glowLight} 0%,
      transparent 70%
    );
    opacity: 0.1;
    z-index: 0;
    animation: pulse 15s infinite alternate;
  }

  @keyframes pulse {
    0% { transform: scale(0.8); opacity: 0.05; }
    100% { transform: scale(1.2); opacity: 0.15; }
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

export const TitleSkills = styled.h1`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: 2.5rem;
  color: ${colors.accent};
  font-weight: 600;
  position: relative;
  z-index: 1;
  letter-spacing: 1px;
  text-transform: uppercase;

  &::before {
    color: ${colors.border};
  }

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, ${colors.accentGradientStart}, ${colors.accentGradientEnd});
    margin: 0.8rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2.5rem;
  width: 100%;
  max-width: 1000px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  }
`;

export const Item = styled.div`
  background: ${({ theme }) =>
    theme.name === "light" ? "rgba(255, 255, 255, 0.6)" : "rgba(18, 18, 18, 0.7)"};
  backdrop-filter: blur(5px);
  border: 1px solid ${colors.border};
  border-radius: 16px;
  padding: 1.8rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: default;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(44, 195, 194, 0.1);
    box-shadow: 0 2px 8px ${colors.accent};
    transform: translateY(-8px);
    border-color: ${colors.borderHover};

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      ${colors.glowLight} 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
  color: ${colors.accent};
  transition: transform 0.4s ease;

  ${Item}:hover & {
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Label = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${colors.text};
  text-align: center;
  transition: color 0.3s ease;

  ${Item}:hover & {
    color: ${colors.accent};
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;
