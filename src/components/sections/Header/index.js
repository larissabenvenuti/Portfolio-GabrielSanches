"use client";

import { useState, useEffect } from "react";
import {
  HeaderSection,
  Link,
  List,
  ListItem,
  Nav,
  HamburgerButton,
  HeaderActions,
} from "@/components/sections/Header/headerStyles";
import ThemeSwitcher from "@/components/ui/toggleButton";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSmartScroll = (id) => {
    setIsMenuOpen(false);
    onNavigate(id);
  };

  const handleKeyPress = (e, id) => {
    if (e.key === "Enter") {
      handleSmartScroll(id);
    }
  };

  if (!isMounted) return null;

  return (
    <HeaderSection>
      <HamburgerButton onClick={toggleMenu} aria-label="Menu">
        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </HamburgerButton>

      <Nav $isOpen={isMenuOpen}>
        <List>
          {["skills", "projects", "about", "gallery"].map((id) => (
            <ListItem key={id}>
              <Link
                role="button"
                tabIndex={0}
                onClick={() => handleSmartScroll(id)}
                onKeyDown={(e) => handleKeyPress(e, id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </ListItem>
          ))}
        </List>
      </Nav>

      <HeaderActions>
        <ThemeSwitcher />
      </HeaderActions>
    </HeaderSection>
  );
}
