import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { motion } from "framer-motion";

import "./ExCarousel.css";

export const ExCarousel = ({ images }) => {
  return (
    <MDBCarousel>
      <motion.div>
        {images.map((item, i) => (
          <MDBCarouselItem
            key={i}
            className="w-100 d-block mx-auto excarousel"
            itemId={i + 1}
            src={item.src}
            alt={item.alt}
          />
        ))}
      </motion.div>
    </MDBCarousel>
  );
};
