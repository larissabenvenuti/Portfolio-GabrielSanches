"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  PageContainer,
  GallerySection,
  TitleGallery,
  PhotoGrid,
  PhotoItem,
  LoadMoreButton,
  ModalBackdrop,
  ModalContent,
  CloseButton,
  ModalCaption,
  NavigationArrow,
} from "./galleryStyles";

const photoData = [
  {
    id: 30,
    thumb: "/assets/images/Gallery/Traffic_Gallery.png",
    full: "/assets/images/Gallery/Traffic_Gallery.png",
    alt: "Traffic Pack",
    caption:
      "Current playable vehicles from the Extended Pack to Agent's Simplified Traffic",
  },
  {
    id: 31,
    thumb: "/assets/images/Gallery/L20_Main.png",
    full: "/assets/images/Gallery/L20_Main.png",
    alt: "Traffic Pack",
    caption: "Nissan L20ET Substance Painter + Texture Baking exercise.",
  },
  {
    id: 32,
    thumb: "/assets/images/Gallery/L20_gallery.png",
    full: "/assets/images/Gallery/L20_gallery.png",
    alt: "Traffic Pack",
    caption: "Nissan L20ET Substance Painter + Texture Baking exercise.",
  },
  {
    id: 29,
    thumb: "/assets/images/Gallery/L20_wire.png",
    full: "/assets/images/Gallery/L20_wire.png",
    alt: "Traffic Pack",
    caption: "Nissan L20ET Substance Painter + Texture Baking exercise.",
  },
  {
    id: 41,
    thumb: "/assets/images/Gallery/Kevo11.png",
    full: "/assets/images/Gallery/Kevo11.png",
    alt: "Photo 21",
    caption: "Ibishu Kevin in its two facelifts.",
  },
  {
    id: 42,
    thumb: "/assets/images/Gallery/Kevo10.png",
    full: "/assets/images/Gallery/Kevo10.png",
    alt: "Photo 21",
    caption: "Kevin",
  },
  {
    id: 43,
    thumb: "/assets/images/Gallery/Kevo7.png",
    full: "/assets/images/Gallery/Kevo7.png",
    alt: "Photo 43",
    caption: "Kevin",
  },
  {
    id: 44,
    thumb: "/assets/images/Gallery/Kevo8.png",
    full: "/assets/images/Gallery/Kevo8.png",
    alt: "Photo 44",
    caption: "Kevin",
  },
  {
    id: 45,
    thumb: "/assets/images/Gallery/Kevo3.png",
    full: "/assets/images/Gallery/Kevo3.png",
    alt: "Photo 45",
    caption: "Interior Materials.",
  },
  {
    id: 46,
    thumb: "/assets/images/Gallery/Kevin3.png",
    full: "/assets/images/Gallery/Kevin3.png",
    alt: "Photo 46",
    caption: "Wireframe of the polyflow of the entire body.",
  },
  {
    id: 47,
    thumb: "/assets/images/Gallery/Kevo192.png",
    full: "/assets/images/Gallery/Kevo192.png",
    alt: "Photo 47",
    caption: "Wireframe of the polyflow of the entire body.",
  },
  {
    id: 53,
    thumb: "/assets/images/Gallery/Charger_Gallery.png",
    full: "/assets/images/Gallery/Charger_Gallery.png",
    alt: "Photo 3",
    caption: "1969 Dodge Charger R/T I modelled for my current Employer.",
  },
  {
    id: 4,
    thumb: "/assets/images/Gallery/Charger2_Gallery.png",
    full: "/assets/images/Gallery/Charger2_Gallery.png",
    alt: "Photo 4",
    caption: ".",
  },
  {
    id: 5,
    thumb: "/assets/images/Gallery/Charger3_Gallery.png",
    full: "/assets/images/Gallery/Charger3_Gallery.png",
    alt: "Photo 5",
    caption: ".",
  },
  {
    id: 6,
    thumb: "/assets/images/Gallery/Charger4_Gallery.png",
    full: "/assets/images/Gallery/Charger4_Gallery.png",
    alt: "Photo 6",
    caption: "Stylized Version",
  },
  {
    id: 7,
    thumb: "/assets/images/Gallery/Charger5_Gallery.png",
    full: "/assets/images/Gallery/Charger5_Gallery.png",
    alt: "Photo 7",
    caption: "Wireframe View",
  },
  {
    id: 8,
    thumb: "/assets/images/Gallery/Charger6_Gallery.png",
    full: "/assets/images/Gallery/Charger6_Gallery.png",
    alt: "Photo 8",
    caption: "Shading View",
  },
  {
    id: 28,
    thumb: "/assets/images/Gallery/Lykan5_Gallery.png",
    full: "/assets/images/Gallery/Lykan5_Gallery.png",
    alt: "Photo 28",
    caption: "W Motors Lykan Hypersports I modelled for my current employer.",
  },
  {
    id: 26,
    thumb: "/assets/images/Gallery/Lykan3_Gallery.png",
    full: "/assets/images/Gallery/Lykan3_Gallery.png",
    alt: "Photo 26",
    caption: ".",
  },
  {
    id: 27,
    thumb: "/assets/images/Gallery/Lykan4_Gallery.png",
    full: "/assets/images/Gallery/Lykan4_Gallery.png",
    alt: "Photo 27",
    caption: ".",
  },
  {
    id: 24,
    thumb: "/assets/images/Gallery/Lykan_Gallery.png",
    full: "/assets/images/Gallery/Lykan_Gallery.png",
    alt: "Photo 24",
    caption: "Wireframe View",
  },
  {
    id: 25,
    thumb: "/assets/images/Gallery/Lykan2_Gallery.png",
    full: "/assets/images/Gallery/Lykan2_Gallery.png",
    alt: "Photo 25",
    caption: "Wireframe View",
  },

  {
    id: 9,
    thumb: "/assets/images/Gallery/Corsa_Gallery.png",
    full: "/assets/images/Gallery/Corsa_Gallery.png",
    alt: "Photo 9",
    caption: "Chevrolet Corsa for Traffic project.",
  },
  {
    id: 10,
    thumb: "/assets/images/Gallery/Corsa2_Gallery.png",
    full: "/assets/images/Gallery/Corsa2_Gallery.png",
    alt: "Photo 10",
    caption: ".",
  },
  {
    id: 11,
    thumb: "/assets/images/Gallery/Corsa3_Gallery.png",
    full: "/assets/images/Gallery/Corsa3_Gallery.png",
    alt: "Photo 11",
    caption: ".",
  },
  {
    id: 12,
    thumb: "/assets/images/Gallery/Corsa4_Gallery.png",
    full: "/assets/images/Gallery/Corsa4_Gallery.png",
    alt: "Photo 12",
    caption: ".",
  },
  {
    id: 22,
    thumb: "/assets/images/Gallery/Kadett_Gallery.png",
    full: "/assets/images/Gallery/Kadett_Gallery.png",
    alt: "Photo 22",
    caption: "Chevrolet Kadett GSi for Traffic Project",
  },
  {
    id: 23,
    thumb: "/assets/images/Gallery/Kadett2_Gallery.png",
    full: "/assets/images/Gallery/Kadett2_Gallery.png",
    alt: "Photo 23",
    caption: ".",
  },
  {
    id: 2,
    thumb: "/assets/images/Gallery/AX_Gallery.png",
    full: "/assets/images/Gallery/AX_Gallery.png",
    alt: "Photo 1",
    caption: "Citroen AX GTi for Traffic Project.",
  },
  {
    id: 3,
    thumb: "/assets/images/Gallery/AX2_Gallery.png",
    full: "/assets/images/Gallery/AX2_Gallery.png",
    alt: "Photo 2",
    caption: ".",
  },
  {
    id: 13,
    thumb: "/assets/images/Gallery/DR30_Gallery.png",
    full: "/assets/images/Gallery/DR30_Gallery.png",
    alt: "Photo 13",
    caption:
      "Unfinished Nissan Skyline DR30 Project, this model was going to end up in Beamng.Drive but ended up fading in forever WIP.",
  },
  {
    id: 14,
    thumb: "/assets/images/Gallery/DR30_2_Gallery.png",
    full: "/assets/images/Gallery/DR30_2_Gallery.png",
    alt: "Photo 14",
    caption:
      "Underside modelled based on reference pictures, currently using old Ibishu 200BX gearbox and front suspension since it was meant to be a Mod.",
  },
  {
    id: 15,
    thumb: "/assets/images/Gallery/DR30_3_Gallery.png",
    full: "/assets/images/Gallery/DR30_3_Gallery.png",
    alt: "Photo 15",
    caption:
      "Modelled the entirety of the front end in higher detail to later bake to a lower poly",
  },
  {
    id: 16,
    thumb: "/assets/images/Gallery/DR30_4_Gallery.png",
    full: "/assets/images/Gallery/DR30_4_Gallery.png",
    alt: "Photo 16",
    caption: "Wireframe of the engine bay + L20 engine",
  },
  {
    id: 17,
    thumb: "/assets/images/Gallery/DR30_5_Gallery.png",
    full: "/assets/images/Gallery/DR30_5_Gallery.png",
    alt: "Photo 17",
    caption:
      "Wireframe of the second FJ20ET Inline 4 that powered 2000RS Skylines of this bodystyle.",
  },
  {
    id: 18,
    thumb: "/assets/images/Gallery/DR30_6_Gallery.png",
    full: "/assets/images/Gallery/DR30_6_Gallery.png",
    alt: "Photo 18",
    caption: "Wireframe of the underside of the DR30.",
  },
  {
    id: 19,
    thumb: "/assets/images/Gallery/DR30_7_Gallery.png",
    full: "/assets/images/Gallery/DR30_7_Gallery.png",
    alt: "Photo 19",
    caption: "Wireframe of the door jams, window frames and Interior.",
  },
  {
    id: 20,
    thumb: "/assets/images/Gallery/DR30_8_Gallery.png",
    full: "/assets/images/Gallery/DR30_8_Gallery.png",
    alt: "Photo 20",
    caption: "Wireframe of the rear.",
  },
  {
    id: 21,
    thumb: "/assets/images/Gallery/DR30_9_Gallery.png",
    full: "/assets/images/Gallery/DR30_9_Gallery.png",
    alt: "Photo 21",
    caption: "Wireframe of the polyflow of the entire body.",
  },
];
export default function PhotoGallery() {
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, photoData.length));
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          closeModal();
        } else if (e.key === "ArrowLeft") {
          navigatePhotos("prev");
        } else if (e.key === "ArrowRight") {
          navigatePhotos("next");
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);

  const filteredPhotos = activeSkill
    ? photoData.filter((photo) => photo.category === activeSkill)
    : photoData;
  const visiblePhotos = filteredPhotos.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredPhotos.length;

  const navigatePhotos = (direction) => {
    const currentIndex = photoData.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? photoData.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === photoData.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedPhoto(photoData[newIndex]);
  };

  return (
    <PageContainer id="gallery">
      <GallerySection>
        <TitleGallery>My Gallery</TitleGallery>

        <PhotoGrid>
          {visiblePhotos.map((photo) => (
            <PhotoItem key={photo.id} onClick={() => openModal(photo)}>
              <Image
                src={photo.thumb}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                quality={80}
              />
            </PhotoItem>
          ))}
        </PhotoGrid>

        {canLoadMore && (
          <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
        )}

        {isModalOpen && selectedPhoto && (
          <ModalBackdrop onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NavigationArrow
                  direction="left"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhotos("prev");
                  }}
                >
                  &lt;
                </NavigationArrow>

                <Image
                  src={selectedPhoto.full}
                  alt={selectedPhoto.alt}
                  width={1200}
                  height={800}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "95vh",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    position: "relative",
                  }}
                  quality={100}
                />

                <NavigationArrow
                  direction="right"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhotos("next");
                  }}
                >
                  &gt;
                </NavigationArrow>

                <ModalCaption>
                  {selectedPhoto.caption ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                </ModalCaption>
              </div>
            </ModalContent>
          </ModalBackdrop>
        )}
      </GallerySection>
    </PageContainer>
  );
}
