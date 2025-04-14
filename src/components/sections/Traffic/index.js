"use client";

import Image from "next/image";
import {
  TrafficSection,
  TitleTraffic,
  ContentWrapper,
  Photo,
  TextContent,
  Paragraph,
} from "@/components/sections/Traffic/trafficStyles";

export default function About() {
  return (
    <TrafficSection id="traffic">
      <TitleTraffic>BeamNG.Drive: Traffic</TitleTraffic>

      <ContentWrapper>

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
        <Photo>
          <Image
            src="/assets/images/Profile.jpg"
            alt="Gabriel Sanches"
            width={300}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </Photo>
      </ContentWrapper>
    </TrafficSection>
  );
}
