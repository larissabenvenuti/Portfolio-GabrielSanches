"use client";

import { useState } from "react";
import Modal from "@/components/sections/Modal";
import {
  ProjectsContainer,
  TitleProjects,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  SeeMoreButton,
} from "@/components/sections/Projects/projectsStyles";

export default function Projects() {
  const projectsList = [
    {
      sketchfabUid: "e0b3e758af03408da779023e383c1543",
      title: "Chevrolet Corsa GSi",
      year: "1994",
      image: "/assets/images/Corsa_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },
    {
      sketchfabUid: "e0b3e758af03408da779023e383c1543",
      title: "Citroen AX GTI",
      year: "1995",
      image: "/assets/images/AX_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },
    {
      sketchfabUid: "ff644c2c4dbe41389d6542e729890e89",
      title: "Gurgel BR-800",
      year: "1988",
      image: "/assets/images/BR800_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },
    {
      sketchfabUid: "5e85d0f502ab45aaacac344603cec0ad",
      title: "Fiat Seicento 1.2 Swap 'Sei'",
      year: "2000",
      image: "/assets/images/Seicento_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },
    {
      sketchfabUid: "6787a688cb1a4e3c8ac7a10cc4548e15",
      title: "Chevrolet Kadett GSi 2.0 EFi",
      year: "1992",
      image: "/assets/images/Kadett_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },
    {
      sketchfabUid: "1422c53f72f941f0a3ea7b6ad379afa5",
      title: "Renault-Sport Sandero RS 2.0 6MT",
      year: "2016",
      image: "/assets/images/SanderoRS_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },    
    {
      sketchfabUid: "be772162e96746d0a4470e52dc7fbb1d",
      title: "Volkswagen Gol 2000 GTi (G2)",
      year: "1999",
      image: "/assets/images/GTi2000_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },    
    {
      sketchfabUid: "6aa4b6e393614851aa5583053bcf6d4c",
      title: "Volkswagen Gol GTi",
      year: "1993",
      image: "/assets/images/GTi_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },    
    {
      sketchfabUid: "c49a0c2a097c40dea655289c762953ef",
      title: "Ford Fiesta XR2i MK3",
      year: "1989",
      image: "/assets/images/XR2iMK3_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },    
    {
      sketchfabUid: "95d268dd551e4c32a1d961c31eb05c10",
      title: "Fiat Panda 4x4 Sisley",
      year: "1992",
      image: "/assets/images/Panda_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },    
    {
      sketchfabUid: "c729ebd425664c59afae4002e8b75e72",
      title: "Nissan March G 'Collet' (K10)",
      year: "1983",
      image: "/assets/images/MarchCollet_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },   
    {
      sketchfabUid: "366c3a7e265c45b999a1baa44cf04130",
      title: "Nissan March I-Z (K10)",
      year: "1983",
      image: "/assets/images/MarchIZ_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },     
    {
      sketchfabUid: "e77ecedbc9d146ab9f3f8d74ce0738c3",
      title: "Nissan March Turbo White Selection (K10)",
      year: "1985",
      image: "/assets/images/MarchTurboWS_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },     
    {
      sketchfabUid: "3df666ced88e454ca5b94a5904054c55",
      title: "Toyota Starlet GT-Turbo S Super Limited",
      year: "1986",
      image: "/assets/images/Starlet_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },     
    {
      sketchfabUid: "9aea5df0b9cf4c289b3931fa6a0b2412",
      title: "Daihatsu Move Canbus Miku Edition",
      year: "2016",
      image: "/assets/images/Canbus_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },     
    {
      sketchfabUid: "66eee8577d944b649a218eb500b1a187",
      title: "Daihatsu Mira TR-XX L70V",
      year: "1990",
      image: "/assets/images/Mira_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },     
    {
      sketchfabUid: "581232fdf32d4419b4f91a183ced684f",
      title: "Nissan Leopard Ultima",
      year: "1986",
      image: "/assets/images/Leopard_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },     
    {
      sketchfabUid: "04bcf5079e5548a984aaee9499935903",
      title: "Nissan March Superturbo",
      year: "1989-1992",
      image: "/assets/images/MarchSuperTurbo_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },     
    {
      sketchfabUid: "a5f5a002ae6b408ea4306a1c5044eee1",
      title: "Nissan S-Cargo",
      year: "1989-1992",
      image: "/assets/images/SCargo_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },   
    {
      sketchfabUid: "7db2db32fcff4d99a4e76f75ce7ca672",
      title: "Nissan March Turbo (K10)",
      year: "1985",
      image: "/assets/images/MarchTurbo_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },   
    {
      sketchfabUid: "69eb711566834234b5dfbde3c6d4ee0a",
      title: "Ford Escort XR3",
      year: "1986",
      image: "/assets/images/XR3_Main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },   
    {
      sketchfabUid: "0f8fa1c0eca445f29c31570db0d0d2c2",
      title: "Nissan FJ20ET Engine",
      year: "1985",
      image: "/assets/images/FJ20_main.png",
      tags: ["3D Modeling", "Blender"],
      description: "Low-poly traffic model.",
      highlights: [
        "Custom shading workflow",
        "Optimized topology",
        "Game ready export",
      ],
      download: "#",
    },   
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev !== null ? (prev + 1) % projectsList.length : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev !== null ? (prev === 0 ? projectsList.length - 1 : prev - 1) : 0
    );
  };

  return (
    <ProjectsContainer id="projects">
      <TitleProjects>My Projects</TitleProjects>

      <ProjectsGrid>
        {projectsList.map((project, index) => (
          <ProjectCard key={index} onClick={() => setCurrentIndex(index)}>
            <ProjectImage>
              <img
                src={project.image}
                alt={`${project.title} - 3D Model`}
                width={400}
                height={300}
              />
            </ProjectImage>
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <SeeMoreButton>
                View Details
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </SeeMoreButton>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {currentIndex !== null && (
        <Modal
          project={projectsList[currentIndex]}
          onClose={() => setCurrentIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </ProjectsContainer>
  );
}
