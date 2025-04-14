"use client"; 

import React from "react";
import {
  FooterSection,
  FooterText,
} from "@/components/sections/Footer/footerStyles";

export default function Footer() {
  return (
    <FooterSection id="footer">
      <FooterText>
        © {new Date().getFullYear()} - Gabriel Sanches & Larissa Benvenuti. All rights reserved.
      </FooterText>
    </FooterSection>
  );
}
