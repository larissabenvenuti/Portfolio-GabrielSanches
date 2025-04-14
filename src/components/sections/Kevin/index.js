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
      <TitleKevin>BeamNG.Drive: Ibishu Kevin</TitleKevin>

      <ContentWrapper>
        <Photo>
          <Image
            src="/assets/images/Gallery/Kevo5.png"
            alt="Kevo my beloved"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            sizes="(max-width: 768px) 260px, (max-width: 992px) 280px, 320px"
            priority
          />
        </Photo>

        <TextContent>
          <Paragraph>
            Kevo is my cute kei truck project I did to learn usage of Substance
            Painter applied to BeamNG.Drive. It uses entirely new cab and bed,
            applied to vanilla Pigeon chassis alongside Hydra engine models.
          </Paragraph>

          <Paragraph>
            Kevin was already modelled as a Low-Poly first, so I had to add
            detail to the mesh in texture. For that I used Substance Painter 3D
            to add detail to the paint via orange peel on the outside visible
            panels and dirt and rust underneath.
          </Paragraph>

          <Paragraph>
            The interior also received new parts, the dashboard was entirely
            redone aswell as door cards. The bare metal also was texturized with
            details in the normal maps and dirt and rust in hard-to-reach spots.
            If you want to check for yourself check
            https://www.beamng.com/resources/ibishu-kevin-kei-truck.30979/ or
            search for Ibishu Kevin on the in-game Repo. There will be more
            pictures in the Gallery aswell :)
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </KevinSection>
  );
}
