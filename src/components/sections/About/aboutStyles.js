import styled, { keyframes } from "styled-components";
import { colors } from "@/contexts/theme";

const typewriter = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  0%, 100% { border-color: transparent }
  50% { border-color: ${colors.accent} }
`;

export const AboutSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: ${colors.background};
  color: ${colors.text};
  text-align: center;
  
  @media (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 15px;
    padding: 3.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
  }
`;

export const TitleAbout = styled.h1`
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
    margin-bottom: 1.5rem; 
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  max-width: 900px;
  width: 100%;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 1.5rem; 
  }
`;

export const Photo = styled.div`
  width: 250px;
  aspect-ratio: 1;
  clip-path: polygon(
    25% 6.7%, 75% 6.7%,
    100% 50%,
    75% 93.3%, 25% 93.3%,
    0% 50%
  );
  border: 3px solid ${colors.accent};
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 200px; 
  }

  @media (max-width: 480px) {
    width: 150px; 
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 600px;
  text-align: justify;

  @media (max-width: 768px) {
    max-width: 90%; 
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${colors.textMuted};

  @media (max-width: 480px) {
    font-size: 1rem; 
  }
`;

export const TypewriterParagraph = styled(Paragraph)`
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid ${colors.accent};
  width: 0;
  animation: ${typewriter} 4s steps(40, end) forwards,
             ${blink} 1s step-end infinite;
  
  @media (max-width: 480px) {
    font-size: 1rem; 
  }
`;
