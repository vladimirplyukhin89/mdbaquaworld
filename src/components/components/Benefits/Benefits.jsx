import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import { motion } from "framer-motion";

import { Layout } from "../Layout/Layout";
import { Text } from "./Text/Text";
import { BenefitsImages } from "./BenefitsImages/BenefitsImages";

import "./Benefits.css";

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

export const Benefits = () => {
  return (
    <MDBContainer fluid className="px-0">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="benefits">
        <Layout>
          <motion.h2 variants={textAnimation} className="benefits__title">
            Преимущества наших станций
          </motion.h2>
          <Text />
        </Layout>
        <BenefitsImages />
      </motion.section>
    </MDBContainer>
  );
};
