"use client";
import styled from "styled-components";

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 0.8rem 2rem;
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  z-index: 1000;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease;
    z-index: 999;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 0;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  white-space: nowrap;
  display: block;

  &:hover {
    background-color: ${({ theme }) => theme.colors.glowLight};
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0;
    border-radius: 0;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;