"use client";
import styled from "styled-components";
import { colors } from "@/contexts/theme";

export const FooterSection = styled.footer`
  padding: 1rem 0.5rem;
  text-align: center;
  background: ${colors.backgroundAlt};
  border-top: 1px solid ${colors.border};

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

export const FooterText = styled.p`
  color: ${colors.textDimmed};
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;