"use client"; 

import Image from "next/image";
import {
  AboutSection,
  TitleAbout,
  ContentWrapper,
  Photo,
  TextContent,
  Paragraph,
  TypewriterParagraph,
} from "@/components/sections/About/aboutStyles";

export default function About() {
  return (
    <AboutSection id="about">
      <TitleAbout>About Me</TitleAbout>

      <ContentWrapper>
        <Photo>
          <Image
            src="/assets/images/Profile.jpg"
            alt="Gabriel Sanches"
            width={300}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </Photo>

        <TextContent>
          <TypewriterParagraph>
            Hey! I&apos;m Gabriel Sanches.
          </TypewriterParagraph>

          <Paragraph>
            I&apos;m a 3D Artist and Game Developer with strong experience in
            Blender and Substance Painter. My main focus is realistic vehicle
            modeling for games and simulations. I love pushing polygon limits
            and optimizing assets for real-time rendering. Whether it&apos;s
            creating detailed models for Baking or low-poly models for game use,
            I&apos;m always experimenting with new techniques. When I&apos;m not
            working on 3D cars, you can find me working on my car and learning
            new techniques to achieve better quality models.
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </AboutSection>
  );
}
