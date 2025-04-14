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
    id: 1,
    thumb: "/assets/images/Gallery/AX_Gallery.png",
    full: "/assets/images/Gallery/AX_Gallery.png",
    alt: "Photo 1",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 2,
    thumb: "/assets/images/Gallery/AX2_Gallery.png",
    full: "/assets/images/Gallery/AX2_Gallery.png",
    alt: "Photo 2",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 3,
    thumb: "/assets/images/Gallery/Charger_Gallery.png",
    full: "/assets/images/Gallery/Charger_Gallery.png",
    alt: "Photo 3",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 4,
    thumb: "/assets/images/Gallery/Charger2_Gallery.png",
    full: "/assets/images/Gallery/Charger2_Gallery.png",
    alt: "Photo 4",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 5,
    thumb: "/assets/images/Gallery/Charger3_Gallery.png",
    full: "/assets/images/Gallery/Charger3_Gallery.png",
    alt: "Photo 5",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 6,
    thumb: "/assets/images/Gallery/Charger4_Gallery.png",
    full: "/assets/images/Gallery/Charger4_Gallery.png",
    alt: "Photo 6",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 7,
    thumb: "/assets/images/Gallery/Charger5_Gallery.png",
    full: "/assets/images/Gallery/Charger5_Gallery.png",
    alt: "Photo 7",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 8,
    thumb: "/assets/images/Gallery/Charger6_Gallery.png",
    full: "/assets/images/Gallery/Charger6_Gallery.png",
    alt: "Photo 8",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 9,
    thumb: "/assets/images/Gallery/Corsa_Gallery.png",
    full: "/assets/images/Gallery/Corsa_Gallery.png",
    alt: "Photo 9",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 10,
    thumb: "/assets/images/Gallery/Corsa2_Gallery.png",
    full: "/assets/images/Gallery/Corsa2_Gallery.png",
    alt: "Photo 10",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 11,
    thumb: "/assets/images/Gallery/Corsa3_Gallery.png",
    full: "/assets/images/Gallery/Corsa3_Gallery.png",
    alt: "Photo 11",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 12,
    thumb: "/assets/images/Gallery/Corsa4_Gallery.png",
    full: "/assets/images/Gallery/Corsa4_Gallery.png",
    alt: "Photo 12",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 13,
    thumb: "/assets/images/Gallery/DR30_Gallery.png",
    full: "/assets/images/Gallery/DR30_Gallery.png",
    alt: "Photo 13",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 14,
    thumb: "/assets/images/Gallery/DR30_2_Gallery.png",
    full: "/assets/images/Gallery/DR30_2_Gallery.png",
    alt: "Photo 14",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 15,
    thumb: "/assets/images/Gallery/DR30_3_Gallery.png",
    full: "/assets/images/Gallery/DR30_3_Gallery.png",
    alt: "Photo 15",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 16,
    thumb: "/assets/images/Gallery/DR30_4_Gallery.png",
    full: "/assets/images/Gallery/DR30_4_Gallery.png",
    alt: "Photo 16",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 17,
    thumb: "/assets/images/Gallery/DR30_5_Gallery.png",
    full: "/assets/images/Gallery/DR30_5_Gallery.png",
    alt: "Photo 17",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 18,
    thumb: "/assets/images/Gallery/DR30_6_Gallery.png",
    full: "/assets/images/Gallery/DR30_6_Gallery.png",
    alt: "Photo 18",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 19,
    thumb: "/assets/images/Gallery/DR30_7_Gallery.png",
    full: "/assets/images/Gallery/DR30_7_Gallery.png",
    alt: "Photo 19",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 20,
    thumb: "/assets/images/Gallery/DR30_8_Gallery.png",
    full: "/assets/images/Gallery/DR30_8_Gallery.png",
    alt: "Photo 20",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 21,
    thumb: "/assets/images/Gallery/DR30_9_Gallery.png",
    full: "/assets/images/Gallery/DR30_9_Gallery.png",
    alt: "Photo 21",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 22,
    thumb: "/assets/images/Gallery/Kadett_Gallery.png",
    full: "/assets/images/Gallery/Kadett_Gallery.png",
    alt: "Photo 22",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 23,
    thumb: "/assets/images/Gallery/Kadett2_Gallery.png",
    full: "/assets/images/Gallery/Kadett2_Gallery.png",
    alt: "Photo 23",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 24,
    thumb: "/assets/images/Gallery/Lykan_Gallery.png",
    full: "/assets/images/Gallery/Lykan_Gallery.png",
    alt: "Photo 24",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 25,
    thumb: "/assets/images/Gallery/Lykan2_Gallery.png",
    full: "/assets/images/Gallery/Lykan2_Gallery.png",
    alt: "Photo 25",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 26,
    thumb: "/assets/images/Gallery/Lykan3_Gallery.png",
    full: "/assets/images/Gallery/Lykan3_Gallery.png",
    alt: "Photo 26",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 27,
    thumb: "/assets/images/Gallery/Lykan4_Gallery.png",
    full: "/assets/images/Gallery/Lykan4_Gallery.png",
    alt: "Photo 27",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    id: 28,
    thumb: "/assets/images/Gallery/Lykan5_Gallery.png",
    full: "/assets/images/Gallery/Lykan5_Gallery.png",
    alt: "Photo 28",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
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
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
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

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowLeft") {
      navigatePhotos("prev");
    } else if (e.key === "ArrowRight") {
      navigatePhotos("next");
    }
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
