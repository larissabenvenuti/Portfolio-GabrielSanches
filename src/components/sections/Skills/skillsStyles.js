import styled from "styled-components";
import { colors } from "@/contexts/theme";

export const SkillsSection = styled.section`
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: ${colors.text};

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    border-radius: 50%;
  }

  &::before {
    top: -80px;
    left: -80px;
    width: 250px;
    height: 250px;
    border: 1px solid ${colors.border};
  }

  &::after {
    bottom: -40px;
    right: -40px;
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, transparent 0%, ${colors.glowLight} 100%);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: ${colors.accent};
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: 600;

  &::before {
    content: "/ ";
    color: ${colors.border};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 900px;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 1rem;
  }
`;

export const Item = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${colors.border};
  border-radius: 12px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease;
  cursor: default;

  &:hover {
    background: rgba(0, 255, 255, 0.05);
    color: ${colors.text};
    box-shadow: 0 0 12px ${colors.glowLight};
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 0.75rem;
  color: ${colors.accent};
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 1rem;
  color: ${colors.accent};

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
