"use client";

import styled from "styled-components";
import { colors } from "@/contexts/theme";

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
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    border-color: ${colors.accent}20;

    ${ProjectTitle} {
      color: ${colors.accent};
    }

    ${ProjectImage} img {
      transform: scale(1.03);
    }

    ${Tag} {
      background: ${colors.accent}15;
      border-color: ${colors.accent}30;
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

export const TitleProjects = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  position: relative;
  text-align: center;
  background: linear-gradient(
    90deg,
    ${colors.accentGradientStart},
    ${colors.accentGradientEnd}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background: ${colors.accent};
    margin: 0.5rem auto 0;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.8rem;
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