"use client";

import styled from "styled-components";
import { colors } from "@/contexts/theme";

export const TitleProjects = styled.h1`
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

export const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0;
  color: ${colors.text};
  font-weight: 600;
  transition: color 0.2s ease;
`;

export const ProjectDescription = styled.p`
  color: ${colors.textMuted};
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Tag = styled.span`
  background: ${colors.background};
  color: ${colors.text};
  padding: 0.25rem 0.6rem;
  border-radius: 16px;
  font-size: 0.7rem;
  border: 1px solid ${colors.border};
`;

export const SeeMoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: transparent;
  color: ${colors.accent};
  font-weight: 500;
  font-size: 0.8rem;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-top: 0.3rem;
  transition: all 0.2s ease;

  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
  }

  &:hover {
    gap: 0.5rem;

    svg {
      transform: translateX(3px);
    }
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.4rem;
`;

export const ProjectInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ProjectCard = styled.article`
  background: ${colors.backgroundAlt};
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  border: 1px solid ${colors.border};
  max-width: 300px;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    img {
      transform: scale(1.05);
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1.2rem;
  }
`;

export const ProjectsContainer = styled.section`
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 3.5rem 1rem;
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 2rem auto 0;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: ${colors.accent};
  border: 1px solid ${colors.border};
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  
  &:hover {
    background-color: ${props => props.theme.colors.glowLight};
    box-shadow: 0 0 10px ${props => props.theme.colors.glowStrong};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;