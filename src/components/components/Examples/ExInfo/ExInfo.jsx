import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { motion } from "framer-motion";

import "./ExInfo.css";

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

export const ExInfo = ({ title, text, subtext, handle, show }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}>
      <motion.h3
        custom={1}
        variants={blockAnimation}
        className="exinfo__subtitle">
        {title}
      </motion.h3>
      <motion.p custom={2} variants={blockAnimation} className="exinfo__text">
        {text}
      </motion.p>
      <motion.p custom={3} variants={blockAnimation} className="exinfo__text">
        {subtext}
      </motion.p>
      <motion.div custom={4} variants={blockAnimation} className="exinfo__btns">
        <MDBBtn className="exinfo__btns_left">Оставить заявку</MDBBtn>
        <MDBBtn color="secondary" onClick={handle}>
          {!show ? "Показать варианты" : "Скрыть варианты"}
        </MDBBtn>
      </motion.div>
    </motion.div>
  );
};
