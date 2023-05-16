import React from "react";
import { motion } from "framer-motion";

import blob from "./img/blob.webp";

import "./Thesis.css";

const blockAnimation = {
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
      delay: custom * 0.2,
      duration: 1
    }
  })
};

export const Thesis = ({ text }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}>
      <motion.div
        variants={blockAnimation}
        custom={1}
        className="d-flex align-items-center justify-content-between bg-primary thesis">
        <p className="thesis__text">{text}</p>

        <img
          src={blob}
          alt="Blob"
          width="50px"
          height="65px"
          className="thesis__icon"
        />
      </motion.div>
    </motion.div>
  );
};
