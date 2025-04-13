"use client";

import {
  AboutSection,
  TitleAbout,
  ContentWrapper,
  Photo,
  TextContent,
  Paragraph,
} from "@/components/sections/About/aboutStyles";

export default function About() {
  return (
    <AboutSection id="about">
      <TitleAbout>About Me</TitleAbout>

      <ContentWrapper>
        <Photo>
          <img src="/profile.jpg" alt="Gabriel Sanches" />
        </Photo>

        <TextContent>
          <Paragraph>
            Hey! I'm Gabriel Sanches, a 3D Artist and Game Developer with strong
            experience in Blender, Unreal Engine, and Roblox Studio. My main
            focus is realistic vehicle modeling for games and simulations.
          </Paragraph>

          <Paragraph>
            I love pushing polygon limits and optimizing assets for real-time
            rendering. Whether it's creating detailed shaders or low-poly models
            for mobile platforms, I'm always experimenting with new techniques.
          </Paragraph>

          <Paragraph>
            When I'm not working on 3D cars, you can find me exploring lighting
            setups, animation, and physics inside game engines.
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </AboutSection>
  );
}
