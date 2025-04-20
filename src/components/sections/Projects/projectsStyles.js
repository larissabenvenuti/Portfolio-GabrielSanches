import styled from "styled-components";
import { colors } from "@/contexts/theme";

export const ProjectsContainer = styled.section`
  padding: 4rem 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  background: ${colors.background};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    right: -15%;
    width: 250px;
    height: 250px;
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
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.8rem;
  }
`;

export const TitleProjects = styled.h1`
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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.8rem;
  position: relative;
  z-index: 1;

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1800px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ProjectCard = styled.article`
  background: ${({ theme }) =>
    theme.name === "light" ? "rgba(255, 255, 255, 0.6)" : "rgba(29, 29, 29, 0.8)"};
  backdrop-filter: blur(4px);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid ${colors.border};
  box-shadow: 0 4px 12px ${colors.accent}20;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px ${colors.accent}40;
    border-color: ${colors.borderHover};
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(45deg, #121212, #1a1a1a);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const ProjectInfo = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 0.6rem;
  color: ${colors.text};
  font-weight: 500;
  line-height: 1.4;
`;

export const ProjectDescription = styled.p`
  font-size: 0.85rem;
  color: ${colors.textMuted};
  margin-bottom: 1rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const SeeMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: transparent;
  color: ${colors.accent};
  font-weight: 500;
  font-size: 0.85rem;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-top: auto;
  transition: all 0.2s ease;
  width: fit-content;

  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
    fill: currentColor;
  }

  &:hover {
    color: ${colors.accentGradientEnd};
    
    svg {
      transform: translateX(3px);
    }
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 2.5rem auto 0;
  padding: 0.7rem 1.8rem;
  background: transparent;
  color: ${colors.accent};
  border: 1px solid ${colors.border};
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 2px 8px ${colors.accent}20;

  &:hover {
    background: rgba(44, 195, 194, 0.1);
    border-color: ${colors.borderHover};
    box-shadow: 0 4px 16px ${colors.accent}30;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    min-width: 160px;
    padding: 0.6rem 1.5rem;
  }
`;
