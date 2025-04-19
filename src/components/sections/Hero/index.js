"use client"; 

import {
  Bio,
  Button,
  ButtonGroup,
  HeroSection,
  Title,
  TitleTwo,
  TypewriterTitle,
} from "@/components/sections/Hero/heroStyles";

export default function Hero() {
  return (
    <HeroSection>
      <Title>Hello, <br/></Title><TypewriterTitle>I&apos;m Gabriel Sanches,<br/></TypewriterTitle><TitleTwo> 3D Vehicle Artist</TitleTwo>
      <Bio>
        Specialized in low and midpoly vehicle models, as well as Texture
        Baking, <br/>Substance Painter texturing and PBR assets.
      </Bio>
      <ButtonGroup>
        <Button href="#about">
          Let&apos;s get in touch!
        </Button>
      </ButtonGroup>
    </HeroSection>
  );
}
