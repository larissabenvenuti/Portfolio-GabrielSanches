import styled from "styled-components";
import { colors } from "@/contexts/theme";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 16px;
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  color: ${colors.text};
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 10001;
  animation: scaleUp 0.3s ease;
  margin-top: 10vh;

  @keyframes scaleUp {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-height: 90vh;
    overflow-y: auto;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.accent};
    transform: rotate(90deg);
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  min-height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    min-height: 250px;
  }
`;

export const ProjectContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: ${colors.text};
  font-weight: 700;
`;

export const ProjectYear = styled.span`
  font-size: 1rem;
  color: ${colors.textMuted};
  font-weight: 400;
`;

export const ProjectTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background: ${colors.accent}20;
  color: ${colors.accent};
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid ${colors.accent};
`;

export const ProjectDescription = styled.p`
  color: ${colors.text};
  line-height: 1.6;
  margin: 0;
`;

export const ProjectHighlights = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const HighlightItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: ${colors.text};
  list-style: none;

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: ${colors.accent};
  }
`;

export const ProjectDownloads = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: 0.9rem;
    color: ${colors.textMuted};
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;

export const DownloadLink = styled.a`
  color: ${colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.accent};
    transform: translateY(-2px);
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${colors.background};
  color: ${colors.text};
  border: 1px solid ${colors.border};
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.accent};
    color: white;
    border-color: ${colors.accent};
  }
`;

export const ViewerWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
  overflow: hidden;
  position: relative;
`;

export const StyledSketchfabIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
