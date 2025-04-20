import { colors } from "@/contexts/theme";
import styled from "styled-components";

export const AboutSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 1.5rem;
  position: relative;
  background: ${colors.background};
  color: ${colors.text};
  max-width: 1200px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    bottom: -15%;
    left: -15%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle at center, ${colors.glowLight} 0%, transparent 70%);
    opacity: 0.1;
    z-index: 0;
    animation: pulse 15s infinite alternate;
  }

  @keyframes pulse {
    0% { transform: scale(0.8); opacity: 0.05; }
    100% { transform: scale(1.1); opacity: 0.15; }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.8rem;
    min-height: auto;
  }
`;

export const TitleAbout = styled.h1`
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

export const Photo = styled.div`
  width: 600px;
  aspect-ratio: 1;
  overflow: hidden;
  clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
  position: relative;
  background: ${colors.backgroundLight}; 
  border: 2px solid ${colors.border};
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 600px;
  background: ${colors.backgroundLightTransparent}; 
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid ${colors.border};
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${colors.textMuted};

  &::first-letter {
    font-size: 1.2em;
    color: ${colors.accent};
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

export const Button = styled.a`
  background: transparent;
  border: 1px solid ${colors.border};
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  color: ${colors.accent};
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 120px;

  &:hover {
    background: rgba(44, 195, 194, 0.1);
    border-color: ${colors.borderHover};
    box-shadow: 3px 6px ${colors.accent};
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.5rem;
  }
`;
