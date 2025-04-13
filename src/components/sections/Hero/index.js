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
        Specialized in low and midpoly vehicle models, as well as Texture
        Baking, Substance Painter texturing and PBR assets.
      </Bio>
      <ButtonGroup>
        <Button href="https://github.com/EzoWasTaken" target="_blank">
          GitHub
        </Button>
        <Button href="https://www.artstation.com/ezosama" target="_blank">
          ArtStation
        </Button>
        <Button href="https://sketchfab.com/EzoYEAHH" target="_blank">
        SketchFab
        </Button>
      </ButtonGroup>
    </HeroSection>
  );
}
