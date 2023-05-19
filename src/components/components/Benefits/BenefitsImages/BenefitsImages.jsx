import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardSubTitle
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { images } from "../img/index";

import "./BenefitsImages.css";

const textAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 1
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1
    }
  }
};

export const BenefitsImages = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}>
      <MDBRow className="mt-5">
        {images.map(({ text, img, alt }, i) => (
          <MDBCol key={i} md="6" lg="3" className="mb-4">
            <motion.div variants={textAnimation}>
              <MDBCard className="benefits-images">
                <div className="mt-3">
                  <img src={img} alt={alt} className="benefits__img" />
                </div>
                <MDBCardBody className="benefits__text">
                  <MDBCardSubTitle className="benefits__subtext">
                    {t(text)}
                  </MDBCardSubTitle>
                </MDBCardBody>
              </MDBCard>
            </motion.div>
          </MDBCol>
        ))}
      </MDBRow>
    </motion.div>
  );
};
