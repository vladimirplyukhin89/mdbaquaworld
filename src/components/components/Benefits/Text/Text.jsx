import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { list } from "./data";

import "./Text.css";

const textAnimation = {
  hidden: {
    y: -50,
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

export const Text = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}>
      <MDBRow>
        <MDBCol>
          <motion.ul
            variants={textAnimation}
            custom={1}
            className="benefits__list">
            {list.map((item, i) => (
              <motion.li key={i}>
                <p className="fs-4 text-white">
                  <MDBIcon fas icon="check-circle" className="benefits__icon" />
                  {t(item)}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </MDBCol>
      </MDBRow>
    </motion.div>
  );
};
