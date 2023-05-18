import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import "./ExCarousel.css";

export const ExCarousel = ({ images }) => {
  return (
    <MDBCarousel>
      <div>
        {images.map((item, i) => (
          <MDBCarouselItem
            key={i}
            className="w-100 d-block mx-auto excarousel"
            itemId={i + 1}
            src={item.src}
            alt={item.alt}
          />
        ))}
      </div>
    </MDBCarousel>
  );
};
