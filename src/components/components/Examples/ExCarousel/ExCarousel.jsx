import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import "./ExCarousel.css";

export const ExCarousel = ({ images }) => {
  return (
    <MDBCarousel touch={true} showIndicators>
      <div>
        {images.map(({ src, alt }, i) => (
          <MDBCarouselItem
            key={i}
            className="d-block mx-auto excarousel"
            itemId={i + 1}
            src={src}
            alt={alt}
          />
        ))}
      </div>
    </MDBCarousel>
  );
};
