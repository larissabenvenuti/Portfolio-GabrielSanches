"use client";

import Image from "next/image";
import {
  AboutSection,
  TitleAbout,
  ContentWrapper,
  Photo,
  TextContent,
  Paragraph,
  ButtonGroup,
  Button,
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
            priority
          />
        </Photo>

        <TextContent>
          <Paragraph>
            Hey! I&apos;m Gabriel Sanches, a passionate 3D Artist and Game
            Developer specializing in vehicle modeling.
          </Paragraph>

          <Paragraph>
            With 5+ years mastering Blender and Substance Painter, I specialize
            in creating premium vehicle models for AAA games and simulations. My
            work balances stunning visual detail with real-time performance,
            expertly navigating high-to-low poly baking workflows while
            innovating PBR material creation. When not perfecting digital
            automotive models, I apply this same technical precision to hands-on
            car restoration and modification - bringing authentic mechanical
            insight to every 3D asset I craft.
          </Paragraph>
        </TextContent>

        <ButtonGroup>
          <Button
            href="https://github.com/EzoWasTaken"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            href="https://www.artstation.com/ezosama"
            target="_blank"
            rel="noopener noreferrer"
          >
            ArtStation
          </Button>
          <Button
            href="https://sketchfab.com/EzoYEAHH"
            target="_blank"
            rel="noopener noreferrer"
          >
            SketchFab
          </Button>
          <Button
            href="mailto:ezoyeahh@gmail.com?subject=Let's get in touch!&body=Hello Gabriel, I'd like to talk about..."
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "mailto:ezoyeahh@gmail.com?subject=Let's get in touch!&body=Hello Gabriel, I'd like to talk about...",
                "_blank"
              );
            }}
          >
            Email
          </Button>

          <Button
            href="https://discord.com/users/ezooooo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </Button>
        </ButtonGroup>
      </ContentWrapper>
    </AboutSection>
  );
}
