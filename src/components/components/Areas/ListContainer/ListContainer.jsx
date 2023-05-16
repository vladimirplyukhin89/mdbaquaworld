import React, { forwardRef } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardSubTitle,
  MDBBtn
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";

import { images } from "./img";

import "../../Benefits/BenefitsImages/BenefitsImages.css";

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 1
    }
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: custom * 0.2
    }
  })
};

const ListContainer = forwardRef(({ img, alt, text }, ref) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      custom={1}
      variants={textAnimation}>
      <MDBRow className="mt-5">
        {images.map((item, i) => (
          <MDBCol key={i} md="6" lg="3" className="mb-4">
            <MDBCard className="benefits-images">
              <div className="mt-3">
                <img src={item.img} alt={item.alt} className="benefits__img" />
              </div>
              <MDBCardBody className="benefits__text">
                <MDBCardSubTitle>{item.text}</MDBCardSubTitle>
              </MDBCardBody>
              {/* <MDBBtn className="mb-3 ">Подробнее</MDBBtn> */}
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </motion.section>
  );
});

export const MListContainer = motion(ListContainer);
