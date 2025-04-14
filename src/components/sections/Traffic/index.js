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
      <TitleTraffic>BeamNG.Drive: Traffic Pack</TitleTraffic>

      <ContentWrapper>

        <TextContent>
          <Paragraph>
            I also have experience with simplified traffic models, as I have made
            a few for Agent&apos;s Simplified Traffic Pack, namely the Kia Picanto, Fiat
            Seicento and Daihatsu Canbus. I have been helping ever since the early days
            of this project as I was deeply interested in the concept.
          </Paragraph>

          <Paragraph>
            After that, I developed my own extension to the Pack, where I focus on more niche,
            rarer or mundane cars from all over the world, trying to give them distinct 
            handling characteristics and customization as well as custom sounds whenever possible.
          </Paragraph>

          <Paragraph>
            These models can be found in his own thread:{" "}
            <a
              href="https://www.beamng.com/threads/agents-simplified-realistic-traffic-mod-eu-yakuza.102034/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4da6ff", textDecoration: "underline" }}
            >
              BeamNG Forum Thread
            </a>
            . And more photos down below in the Gallery section.
          </Paragraph>
        </TextContent>

        <Photo>
          <Image
            src="/assets/images/Gallery/Traffic_Gallery.png"
            alt="Traffic Pack"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            sizes="(max-width: 768px) 260px, (max-width: 992px) 280px, 320px"
            priority
          />
        </Photo>
      </ContentWrapper>
    </TrafficSection>
  );
}
