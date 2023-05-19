import React, { forwardRef } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardSubTitle
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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

const ListContainer = forwardRef(() => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      custom={1}
      variants={textAnimation}>
      <MDBRow className="mt-5">
        {images.map(({ img, alt, text }, i) => (
          <MDBCol key={i} md="6" lg="3" className="mb-4">
            <MDBCard className="benefits-images">
              <div className="mt-3">
                <img src={img} alt={alt} className="benefits__img" />
              </div>
              <MDBCardBody className="benefits__text">
                <MDBCardSubTitle className="benefits__subtext">
                  {t(text)}
                </MDBCardSubTitle>
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
