"use client";

import { Container, Orbit, Car } from './carGifStyles';
import { carColors } from './carGifStyles';

export default function CarGif() {
  return (
    <Container>
      <Orbit>
        {carColors.map((carColor, i) => (
          <Car 
            key={i}
            src={carColor} 
            alt={`Twingo color ${i}`} 
            style={{
              transform: `rotate(${(360 / carColors.length) * i}deg) translate(120px) rotate(-${(360 / carColors.length) * i}deg)`
            }}
          />
        ))}
      </Orbit>
    </Container>
  );
}