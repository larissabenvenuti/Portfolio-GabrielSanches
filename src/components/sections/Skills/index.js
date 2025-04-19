"use client";

import React from "react";
import { FaHeadphones, FaDiceD6  } from "react-icons/fa";
import { SiBlender, SiAdobe, SiRoblox } from "react-icons/si";
import { GiEmptyChessboard, GiPerspectiveDiceThree } from "react-icons/gi";
import { PiOven } from "react-icons/pi";
import {
  SkillsSection,
  Title,
  Grid,
  Item,
  IconWrapper,
  Label,
} from "@/components/sections/Skills/skillsStyles";

export default function Skills() {
  const skills = [
    { label: "Blender", icon: <SiBlender /> },
    { label: "Substance Painter", icon: <SiAdobe /> },
    { label: "Roblox Studio", icon: <SiRoblox /> },
    { label: "3D Modeling", icon: <FaDiceD6   /> },
    { label: "Texturing", icon: <GiEmptyChessboard /> },
    { label: "UV Mapping", icon: < GiPerspectiveDiceThree  /> },
    { label: "Texture Baking", icon: <PiOven /> },
    { label: "Audio", icon: <FaHeadphones /> },
  ];

  return (
    <SkillsSection id="skills">
      <Title>My Skills</Title>
      <Grid>
        {skills.map((skill, index) => (
          <Item key={index}>
            <IconWrapper>{skill.icon}</IconWrapper>
            <Label>{skill.label}</Label>
          </Item>
        ))}
      </Grid>
    </SkillsSection>
  );
}
