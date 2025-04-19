import styled, { keyframes } from "styled-components";
import { colors } from "@/contexts/theme";

const textLength = 18;
const typewriter = keyframes`
  from { width: 0 }
  to { width: ${textLength}ch }
`;

const blink = keyframes`
  0%, 100% { border-color: transparent }
  50% { border-color: ${colors.accent} }
`;

export const HeroSection = styled.div`
  color: ${colors.text};
  min-height: 100vh;
  padding: 4.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;
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
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const TypewriterTitle = styled.h1`
  font-size: 2.5rem;
  background: linear-gradient(
    90deg,
    ${colors.accentGradientStart},
    ${colors.accentGradientEnd}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid ${colors.accent};
  width: 0;
  animation: ${typewriter} 4s steps(40, end) forwards,
             ${blink} 1s step-end infinite;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const TitleTwo = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Bio = styled.p`
  line-height: 1.5;
  max-width: 850px;
  margin-bottom: 3rem;
  text-align: left;
  color: ${colors.textMuted};
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: left;
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
