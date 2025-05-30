import styled from "styled-components";
import { colors } from "@/contexts/theme";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
  z-index: 1000;
  padding: 2rem;
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

export const GalleryContainer = styled.div`
  background-color: ${colors.background};
  min-height: 100vh;
  color: ${colors.text};
`;

export const GallerySection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem clamp(1rem, 3vw, 3rem);
  color: ${colors.text};
  @media (max-width: 768px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const TitleGallery = styled.h1`
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

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: clamp(0.75rem, 2vw, 1rem);
  margin-top: clamp(2rem, 5vw, 3rem);

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const PhotoItem = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  aspect-ratio: 1/1;
  border: 1px solid ${colors.border};
  box-shadow: 0 2px 4px ${colors.shadow};
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
    
    img {
      transform: scale(1.05);
    }
  }

  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: clamp(1.5rem, 4vw, 2rem) auto 0;
  padding: 0.75rem clamp(1rem, 3vw, 1.5rem);
  background-color: transparent;
  color: ${colors.accent};
  border: 1px solid ${colors.border};
  border-radius: 4px;
  font-size: clamp(0.9rem, 2vw, 1rem);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.glowLight};
    box-shadow: 0 0 10px ${colors.glowStrong};
    border-color: ${colors.borderHover};
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const ModalContent = styled.div`
   position: relative;
  max-width: 95vw;
  max-height: 95vh;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 98vw;
    max-height: 98vh;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: ${colors.accent}20;
  color: ${colors.accent};
  border: 1px solid ${colors.border};
  width: clamp(30px, 5vw, 40px);
  height: clamp(30px, 5vw, 40px);
  border-radius: 50%;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  line-height: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.accent}30;
    transform: scale(1.1);
    box-shadow: 0 0 10px ${colors.glowLight};
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
  }
`;

export const ModalCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  color: #fff;
  background: linear-gradient(
    to top, 
    #000, 
    #161616, 
    transparent 100%
  );
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.75rem 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.75rem;
  }
`;

export const NavigationArrow = styled.button`
  position: absolute;
  top: 50%;
  ${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
  transform: translateY(-50%);
  background: ${colors.accent}20;
  color: ${colors.accent};
  border: 1px solid ${colors.border};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 1rem;
    ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  }
`;
