'use client';

import { useState, useEffect } from "react";
import {
  HeaderSection,
  Link,
  List,
  ListItem,
  Nav,
  HeaderActions,
  HamburgerButton
} from "@/components/sections/Header/headerStyles";
import ThemeSwitcher from "@/components/ui/toggleButton";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.visibility = "visible";
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderSection>
      <HamburgerButton onClick={toggleMenu} aria-label="Menu">
        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </HamburgerButton>
      
      <Nav $isOpen={isMenuOpen}>
        <List>
          <ListItem>
            <Link href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          </ListItem>
          <ListItem>
            <Link href="#about" onClick={() => setIsMenuOpen(false)}>About</Link>
          </ListItem>
          <ListItem>
            <Link href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
          </ListItem>
          <ListItem>
            <Link href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          </ListItem>
        </List>
      </Nav>
      
      <HeaderActions>
        <ThemeSwitcher />
      </HeaderActions>
    </HeaderSection>
  );
}
