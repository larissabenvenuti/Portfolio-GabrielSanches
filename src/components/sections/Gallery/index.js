"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
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
} from './galleryStyles';

const photoData = [
  {
    id: 1,
    thumb: '/assets/images/Gallery/AX_Gallery.png',
    full: '/assets/images/Gallery/AX_Gallery.png',
    alt: 'Photo 1'
  },
  {
    id: 2,
    thumb: '/assets/images/Gallery/AX2_Gallery.png',
    full: '/assets/images/Gallery/AX2_Gallery.png',
    alt: 'Photo 2'
  },
  {
    id: 3,
    thumb: '/assets/images/Gallery/Charger_Gallery.png',
    full: '/assets/images/Gallery/Charger_Gallery.png',
    alt: 'Photo 3'
  },
  {
    id: 4,
    thumb: '/assets/images/Gallery/Charger2_Gallery.png',
    full: '/assets/images/Gallery/Charger2_Gallery.png',
    alt: 'Photo 4'
  },
  {
    id: 5,
    thumb: '/assets/images/Gallery/Charger3_Gallery.png',
    full: '/assets/images/Gallery/Charger3_Gallery.png',
    alt: 'Photo 5'
  },
  {
    id: 6,
    thumb: '/assets/images/Gallery/Charger4_Gallery.png',
    full: '/assets/images/Gallery/Charger4_Gallery.png',
    alt: 'Photo 6'
  },
  {
    id: 7,
    thumb: '/assets/images/Gallery/Charger5_Gallery.png',
    full: '/assets/images/Gallery/Charger5_Gallery.png',
    alt: 'Photo 7'
  },
  {
    id: 8,
    thumb: '/assets/images/Gallery/Charger6_Gallery.png',
    full: '/assets/images/Gallery/Charger6_Gallery.png',
    alt: 'Photo 8'
  },
  {
    id: 9,
    thumb: '/assets/images/Gallery/Corsa_Gallery.png',
    full: '/assets/images/Gallery/Corsa_Gallery.png',
    alt: 'Photo 9'
  },
  {
    id: 10,
    thumb: '/assets/images/Gallery/Corsa2_Gallery.png',
    full: '/assets/images/Gallery/Corsa2_Gallery.png',
    alt: 'Photo 10'
  },
  {
    id: 11,
    thumb: '/assets/images/Gallery/Corsa3_Gallery.png',
    full: '/assets/images/Gallery/Corsa3_Gallery.png',
    alt: 'Photo 11'
  },
  {
    id: 12,
    thumb: '/assets/images/Gallery/Corsa4_Gallery.png',
    full: '/assets/images/Gallery/Corsa4_Gallery.png',
    alt: 'Photo 12'
  },
];

export default function PhotoGallery() {
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 10, photoData.length));
  };
  
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const filteredPhotos = activeSkill ? photoData.filter(photo => photo.category === activeSkill) : photoData;
  const visiblePhotos = filteredPhotos.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredPhotos.length;

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
                style={{ objectFit: 'cover' }}
                quality={80}
              />
            </PhotoItem>
          ))}
        </PhotoGrid>

        {canLoadMore && (
          <LoadMoreButton onClick={handleLoadMore}>
            Load More
          </LoadMoreButton>
        )}

        {isModalOpen && selectedPhoto && (
          <ModalBackdrop onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
              <Image
                src={selectedPhoto.full}
                alt={selectedPhoto.alt}
                width={1200}
                height={800}
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '90vh', 
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain' 
                }}
                quality={100}
              />
            </ModalContent>
          </ModalBackdrop>
        )}
      </GallerySection>
    </PageContainer>
  );
}