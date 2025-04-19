import { colors } from "@/contexts/theme";
import styled from "styled-components";

export const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 3rem);
  max-width: min(1200px, 90%);
  margin: 0 auto;
  background: ${colors.background};
  color: ${colors.text};
  text-align: center;
`;

export const TitleAbout = styled.h1`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 2rem;
  color: ${colors.accent};
  font-weight: 500;

  &:before {
    content: '/ ';
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
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
  width: 250px;
  aspect-ratio: 1;
  clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
  border: 3px solid ${colors.accent};
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  text-align: justify;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${colors.textMuted};
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
  width: 100%;
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
