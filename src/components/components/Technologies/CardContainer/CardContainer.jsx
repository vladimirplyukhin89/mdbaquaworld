import React from "react";
import { motion } from "framer-motion";

import { CardItem } from "./CardItem/CardItem";

import "./CardContainer.css";

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
      delay: custom * 0.2,
      duration: 1
    }
  })
};

const blockAnimation = {
  hidden: {
    x: -50,
    opacity: 0,
    transition: {
      duration: 1
    }
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: custom * 0.2
    }
  })
};

export const CardContainer = ({ images, text }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}>
      <motion.p
        variants={textAnimation}
        custom={1}
        className="cardContainer__title">
        {text}
      </motion.p>

      <ul className="px-0 technologies__container">
        {images.map((item, i) => {
          return (
            <motion.li
              variants={blockAnimation}
              custom={2}
              key={i}
              className="mb-4">
              <CardItem {...item} />
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};
