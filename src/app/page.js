"use client";

import React, { useState, Suspense, lazy } from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";
import LazySection from "@/components/ui/LazySection";

const Skills = lazy(() => import("@/components/sections/Skills"));
const Projects = lazy(() => import("@/components/sections/Projects"));
const About = lazy(() => import("@/components/sections/About"));
const Gallery = lazy(() => import("@/components/sections/Gallery"));

export default function Home() {
  const [forcedSection, setForcedSection] = useState(null);

  const onNavigate = (id) => {
    setForcedSection(id); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header onNavigate={onNavigate} />
      <Hero />

      <LazySection
        id="skills"
        delay={500}
        forceLoad={forcedSection === "skills"} 
        loadComponent={() => <Skills />}
      />
      <LazySection
        id="projects"
        delay={1000}
        forceLoad={forcedSection === "projects"} 
        loadComponent={() => <Projects />}
      />
      <LazySection
        id="about"
        delay={1500}
        forceLoad={forcedSection === "about"} 
        loadComponent={() => <About />}
      />
      <LazySection
        id="gallery"
        delay={2000}
        forceLoad={forcedSection === "gallery"} 
        loadComponent={() => <Gallery />}
      />

      <Footer />
    </>
  );
}