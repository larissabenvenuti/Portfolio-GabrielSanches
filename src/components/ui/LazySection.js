"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import CarGif from "@/components/ui/carGif";
import { SectionWrapper } from "./LazySectionStyles";

export default function LazySection({ loadComponent, id, delay = 0, forceLoad = false }) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const load = () => {
      setIsVisible(true);
      setIsLoading(true);

      const finalDelay = forceLoad ? 0 : delay;

      setTimeout(() => {
        setShouldLoad(true);
        setIsLoading(false);
        setIsLoaded(true);
      }, finalDelay);
    };

    if (forceLoad) {
      load();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          load();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay, forceLoad]);

  const Component = shouldLoad ? (
    <Suspense fallback={<CarGif />}>{loadComponent()}</Suspense>
  ) : null;

  return (
    <SectionWrapper 
      ref={sectionRef} 
      id={id}
      className={isLoaded ? 'loaded' : ''}
    >
      {isLoading && <CarGif />}
      {isVisible && Component}
    </SectionWrapper>
  );
}