"use client"; 

import React from "react";
import {
  TitleSkills,
  SkillsSection,
  SkillGrid,
  SkillItem,
} from "@/components/sections/Skills/skillsStyles";

export default function Skills() {
  return (
    <SkillsSection id="skills">
      <TitleSkills>My Skills</TitleSkills>
      <SkillGrid>
        <SkillItem>Blender</SkillItem>
        <SkillItem>Substance Painter</SkillItem>
        <SkillItem>Roblox Studio</SkillItem>
        <SkillItem>3D Modeling</SkillItem>
        <SkillItem>Texturing</SkillItem>
        <SkillItem>UV Mapping</SkillItem>
        <SkillItem>Texture Baking</SkillItem>
        <SkillItem>Audio</SkillItem>
      </SkillGrid>
    </SkillsSection>
  );
}
