import React from "react";
import { MDBBtn, MDBRipple } from "mdb-react-ui-kit";
import { motion } from "framer-motion";

import bgVideo from "./video/hero.mp4";

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

export const Hero = () => {
  return (
    <div className="text-center bg-image h-100">
      <video
        style={{ minWidth: "100%", minHeight: "100%" }}
        playsInline
        autoPlay
        muted
        loop>
        <source className="h-100" src={bgVideo} type="video/mp4" />
      </video>

      <motion.div
        initial="hidden"
        whileInView="visible"
        className="mask h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <motion.h1 custom={1} variants={textAnimation} className="mb-4">
              Высокопроизводительные системы очистки воды
            </motion.h1>
            <motion.h4 custom={2} variants={textAnimation} className="mb-5">
              Очищаем воду для решения любых Ваших задач и производственных
              целей.
              <br /> Экономим Ваши ресурсы, делая автоматизированные системы
              очистки воды доступными.
            </motion.h4>

            <motion.div custom={3} variants={textAnimation}>
              <MDBRipple>
                <MDBBtn className="btn btn-lg" href="#form" role="button">
                  Оставить заявку
                </MDBBtn>
              </MDBRipple>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
