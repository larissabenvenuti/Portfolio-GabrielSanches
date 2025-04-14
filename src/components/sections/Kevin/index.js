"use client";

import Image from "next/image";
import {
  KevinSection,
  TitleKevin,
  ContentWrapper,
  Photo,
  TextContent,
  Paragraph,
} from "@/components/sections/Kevin/kevinStyles";

export default function About() {
  return (
    <KevinSection id="kevin">
      <TitleKevin>BeamNG.Drive: Kevin</TitleKevin>

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
          <Paragraph>
            Hey! I&apos;m Gabriel Sanches, a 3D Artist and Game Developer with
            strong experience in Blender and Substance Painter. My main focus is
            realistic vehicle modeling for games and simulations.
          </Paragraph>

          <Paragraph>
            I love pushing polygon limits and optimizing assets for real-time
            rendering. Whether it&apos;s creating detailed models for Baking or
            low-poly models for game use, I&apos;m always experimenting with new
            techniques.
          </Paragraph>

          <Paragraph>
            When I&apos;m not working on 3D cars, you can find me working on my
            car and learning new techniques to achieve better quality models.
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </KevinSection>
  );
}
