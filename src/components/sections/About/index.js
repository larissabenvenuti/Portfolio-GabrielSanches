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
          <img src="/assets/images/Profile.jpg" alt="Gabriel Sanches" />
        </Photo>

        <TextContent>
          <Paragraph>
            Hey! I'm Gabriel Sanches, a 3D Artist and Game Developer with strong
            experience in Blender and Substance painter. My main
            focus is realistic vehicle modeling for games and simulations.
          </Paragraph>

          <Paragraph>
            I love pushing polygon limits and optimizing assets for real-time
            rendering. Whether it's creating detailed models for Baking or low-poly models
            for game use, I'm always experimenting with new techniques.
          </Paragraph>

          <Paragraph>
            When I'm not working on 3D cars, you can find me working on my car and 
            learning new techniques to achieve better quality models.
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </AboutSection>
  );
}
