"use client";

import {
  Bio,
  Button,
  ButtonGroup,
  HeroSection,
  Subtitle,
  Title,
} from "@/components/sections/Hero/heroStyles";

export default function Hero() {
  return (
    <HeroSection>
      <Title>Gabriel Sanches</Title>
      <Subtitle>3D Vehicle Artist</Subtitle>
      <Bio>
        Specialized in hyper-detailed 3D car modeling with experience in
        Blender, Unreal Engine, and Roblox Studio. Focused on realism,
        performance, and game-ready assets.
      </Bio>
      <ButtonGroup>
        <Button href="https://github.com/seuuser" target="_blank">
          GitHub
        </Button>
        <Button href="https://www.artstation.com/seuuser" target="_blank">
          ArtStation
        </Button>
      </ButtonGroup>
    </HeroSection>
  );
}
