"use client";

import { useState, useMemo, lazy, Suspense } from "react";
import Image from "next/image";
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
  LoadMoreButton,
} from "@/components/sections/Projects/projectsStyles";

const LazyModal = lazy(() => import("@/components/sections/Modal"));

const projectsList = [
  {
    sketchfabUid: "91b0d2ca0b7546e78525e332182f8b8d",
    title: "Nissan L20ET Inline 6 Engine",
    year: "1981",
    image: "/assets/images/Gallery/L20_Main.png",
    tags: ["3D Modeling", "Blender"],
    description: "Taken from the DR30 as a training exercise, textured this L20 model in Substance Painter and baked it to a low-poly variant ready to be used in-game. PBR.",
    highlights: [
      "Substance Painter",
      "Optimized topology",
      "Game ready export",
    ],
    download: "#",
  },
  {
    sketchfabUid: "ff644c2c4dbe41389d6542e729890e89",
    title: "Gurgel BR-800",
    year: "1988",
    image: "/assets/images/Main/BR800_main.png",
    tags: ["3D Modeling", "Blender"],
    description: "Low-poly traffic model, Textured using Substance Painter over the low-poly mesh. Sits at 31.2k tris and features full PBR materials.",
    highlights: [
      "Substance Painter",
      "Optimized topology",
      "Game ready export",
    ],
    download: "#",
  },
  {
    sketchfabUid: "e0b3e758af03408da779023e383c1543",
    title: "Citroen AX GTI",
    year: "1995",
    image: "/assets/images/Main/AX_main.png",
    tags: ["3D Modeling", "Blender"],
    description: "Low-poly traffic model made out of a Photoscan, sitting at 30k tris.",
    highlights: [
      "Retopology",
      "Traffic",  
      "Optimized topology",
      "Game ready export",
    ],
    download: "#",
  },
  {
    sketchfabUid: "5e85d0f502ab45aaacac344603cec0ad",
    title: "Fiat Seicento 1.2 Swap 'Sei'",
    year: "2000",
    image: "/assets/images/Main/Seicento_main.png",
    tags: ["3D Modeling", "Blender"],
    description: "Low-poly traffic model made out of a Photoscan of my friend's @Car_killer personal Fiat Seicento. 25.2K Tris",
    highlights: [
      "Retopology",
      "Traffic",        
      "Optimized topology",
      "Game ready export",
    ],
    download: "#",
  },
  {
    sketchfabUid: "6787a688cb1a4e3c8ac7a10cc4548e15",
    title: "Chevrolet Kadett GSi 2.0 EFi",
    year: "1992",
    image: "/assets/images/Main/Kadett_main.png",
    tags: ["3D Modeling", "Blender"],
    description: "Low-poly traffic model, made out of at least 3 or 4 different scans that when added made a full body to retopo.",
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
    image: "/assets/images/Main/SanderoRS_main.png",
    tags: ["3D Modeling", "Blender"],
    description: "Low-poly traffic model. Made from a Scan of my IRL car. I decided to use more tris on this one due body shapes. 53k tris.",
    highlights: [
      "Retopology",
      "Traffic",  
      "Optimized topology",
      "Game ready export",
    ],
    download: "#",
  },    
  {
    sketchfabUid: "be772162e96746d0a4470e52dc7fbb1d",
    title: "Volkswagen Gol 2000 GTi (G2)",
    year: "1999",
    image: "/assets/images/Main/GTI2000_Main.png",
    tags: ["3D Modeling", "Blender"],
    description: "Low-poly traffic model. Made from reference pictures and blueprints. 26.3k tris. Also features alternative Specs: Gol SPECIAL",
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
    image: "/assets/images/Main/GOLGTI_main.png",
    tags: ["3D Modeling", "Blender"],
    description: "Low-poly traffic model. Made from reference pictures and blueprints. 51.7k tris due to the shape of the wheels, being BBS's they require a lot of tris.",
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
    image: "/assets/images/Main/XR2i_main.png",
    tags: ["3D Modeling", "Blender"],
    description: "Low-poly traffic model made from reference pictures and blueprints. 30.8K Tris.",
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
    image: "/assets/images/Main/MarchWS_main.png",
    tags: ["3D Modeling", "Blender"],
    description: "Low-poly traffic model. This model was a derivate of my main BeamNG.Drive K10 March Mod, hence why the amount of different March Specs. 42.1k Tris.",
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
    image: "/assets/images/Main/Starlet_main.png",
    tags: ["3D Modeling", "Blender"],
    description: "The first bespoke Traffic model I made, initially when there wasn't any vanilla traffic yet so it died due to the difficulty of making an entire jbeam from scratch. 25.8k Tris.",
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
    image: "/assets/images/Main/Canbus_main.png",
    tags: ["3D Modeling", "Blender"],
    description: "Initially made within a weekend to teach a friend (agent) how to model, It ended up being part of a prototype Traffic mod, and later fully instated in Agent's Simplified Traffic Pack. 23.3k Tris",
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
    image: "/assets/images/Main/SUPERTURBO_main.png",
    tags: ["3D Modeling", "Blender"],
    description: "Original model from the March pack, simplified to be used for Traffic purposes. 40k Tris.",
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
    image: "/assets/images/Main/MarchTURBO_main.png",
    tags: ["3D Modeling", "Blender"],
    description: "Second Original model from the March pack, simplified to be used for Traffic purposes. 50.5k Tris.",
    highlights: [
      "Custom shading workflow",
      "Optimized topology",
      "Game ready export",
    ],
    download: "#",
  },     
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const visibleProjects = useMemo(
    () => projectsList.slice(0, visibleCount),
    [visibleCount]
  );

  const canLoadMore = visibleCount < projectsList.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    if (typeof window !== "undefined" && window.requestIdleCallback) {
      window.requestIdleCallback(
        () => {
          setVisibleCount((prev) => Math.min(prev + 8, projectsList.length));
          setIsLoading(false);
        },
        { timeout: 500 }
      );
    } else {
      setTimeout(() => {
        setVisibleCount((prev) => Math.min(prev + 8, projectsList.length));
        setIsLoading(false);
      }, 500);
    }
  };

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

  const preloadImages = useMemo(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % projectsList.length;
    const prevIndex =
      currentIndex === 0 ? projectsList.length - 1 : currentIndex - 1;
    
    return (
      <>
        <link rel="preload" href={projectsList[nextIndex].image} as="image" />
        <link rel="preload" href={projectsList[prevIndex].image} as="image" />
      </>
    );
  }, [currentIndex]);

  return (
    <ProjectsContainer id="projects">
      {preloadImages}
      <TitleProjects>My Projects</TitleProjects>

      <ProjectsGrid>
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.sketchfabUid} 
            onClick={() => setCurrentIndex(index)}
            data-aos="fade-up"
            data-aos-delay={(index % 8) * 100}
          >
            <ProjectImage>
              <Image
                src={project.image}
                alt={`${project.title} - 3D Model`}
                width={400}
                height={300}
                loading={index > 3 ? "lazy" : "eager"}
                priority={index < 2} 
                quality={85} 
              />
            </ProjectImage>
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <p>{project.year}</p>
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

      {canLoadMore && (
        <LoadMoreButton onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load More Projects"}
        </LoadMoreButton>
      )}

      {currentIndex !== null && (
        <Suspense fallback={null}>
          <LazyModal
            project={projectsList[currentIndex]}
            onClose={() => setCurrentIndex(null)}
            onNext={handleNext}
            onPrev={handlePrev}
            totalProjects={projectsList.length}
            currentProjectIndex={currentIndex}
          />
        </Suspense>
      )}
    </ProjectsContainer>
  );
}