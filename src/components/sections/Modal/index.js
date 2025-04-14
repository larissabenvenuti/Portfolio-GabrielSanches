"use client"; 

import {
  Overlay,
  ModalContainer,
  CloseButton,
  ProjectContent,
  ProjectHeader,
  ProjectTitle,
  ProjectYear,
  ProjectTags,
  Tag,
  ProjectDescription,
  ProjectHighlights,
  HighlightItem,
  ProjectDownloads,
  DownloadLink,
  NavigationButtons,
  NavButton,
  ViewerWrapper,
  StyledSketchfabIframe,
  ProjectImage,
} from "./modalStyles";
import Image from "next/image";

export default function Modal({ project, onClose, onNext, onPrev }) {
  const sketchfabUid = project?.sketchfabUid;
  const sketchfabUrl = sketchfabUid 
    ? `https://sketchfab.com/models/${sketchfabUid}/embed` 
    : null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CloseButton>

        {sketchfabUrl ? (
          <ViewerWrapper>
            <StyledSketchfabIframe
              src={sketchfabUrl}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              title={`3D Model: ${project.title}`}
            />
          </ViewerWrapper>
        ) : (
          <ProjectImage>
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              quality={100}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </ProjectImage>
        )}

        <ProjectContent>
          <ProjectHeader>
            <div>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectYear>{project.year}</ProjectYear>
            </div>
            <ProjectTags>
              {project.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </ProjectTags>
          </ProjectHeader>

          <ProjectDescription>{project.description}</ProjectDescription>

          <ProjectHighlights>
            {project.highlights.map((item, i) => (
              <HighlightItem key={i}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </HighlightItem>
            ))}
          </ProjectHighlights>

          <ProjectDownloads>
            <span>Available on:</span>
            <div>
              <DownloadLink href={project.download}></DownloadLink>
              <DownloadLink href={project.download}></DownloadLink>
            </div>
          </ProjectDownloads>

          <NavigationButtons>
            <NavButton onClick={onPrev}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Previous
            </NavButton>
            <NavButton onClick={onNext}>
              Next
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavButton>
          </NavigationButtons>
        </ProjectContent>
      </ModalContainer>
    </Overlay>
  );
}