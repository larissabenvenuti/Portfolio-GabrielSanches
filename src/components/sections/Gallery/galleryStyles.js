"use client";
import styled from "styled-components";
import { colors } from "@/contexts/theme";

export const PageContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  color: ${props => props.theme.colors.text};
`;

export const GallerySection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem clamp(1rem, 3vw, 3rem);
  background-color: transparent;
  color: ${props => props.theme.colors.text};
`;

export const TitleGallery = styled.h1`
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
  transition: transform 0.3s ease;
  aspect-ratio: 1/1;
  border: 1px solid ${colors.border};
  box-sizing: border-box;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 15px ${props => props.theme.colors.glowLight};
    
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
    background-color: ${props => props.theme.colors.glowLight};
    box-shadow: 0 0 10px ${props => props.theme.colors.glowStrong};
  }
  
  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  border-radius: 8px;
  border: 1px solid ${colors.border};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
  
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
  background: rgba(0, 188, 212, 0.2);
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
  
  &:hover {
    background: rgba(0, 188, 212, 0.3);
  }
  
  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
  }
`;