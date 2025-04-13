import React from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import { Container } from "@/styles/GlobalStyles";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <Projects id="projects" />
      <About id="about" />
      <Skills id="skills" />
      <Footer />
    </Container>
  );
}