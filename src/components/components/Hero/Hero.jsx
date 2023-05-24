import React from "react";
import { MDBBtn, MDBRipple } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Layout } from "../Layout";

import videoWebm from "./video/hero.webm";
import videoMp4 from "./video/hero.mp4";

import "./Hero.css";

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
  const { t } = useTranslation();

  return (
    <div className="text-center bg-image hero">
      <video
        className="hero__video"
        playsInline
        autoPlay
        muted
        loop
        preload="auto">
        <source className="h-100" src={videoWebm} type="video/webm" />
        <source className="h-100" src={videoMp4} type="video/mp4" />
      </video>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ delay: 0.2, once: true }}
        className="mask h-100 hero__wrapper">
        <div className="d-flex justify-content-center align-items-center h-100 mt-3">
          <Layout>
            <div className="text-white">
              <motion.h1
                custom={1}
                variants={textAnimation}
                className="mb-4 hero__title">
                {t("welcome")}
              </motion.h1>
              <motion.h5
                custom={2}
                variants={textAnimation}
                className="pb-5 fw-normal hero__subtitle">
                {t("greeting")}
                <br />
                {t("subgreeting")}
              </motion.h5>

              <motion.div custom={2} variants={textAnimation}>
                <MDBRipple>
                  <MDBBtn className="btn btn-lg" href="#form" role="button">
                    {t("request")}
                  </MDBBtn>
                </MDBRipple>
              </motion.div>
            </div>
          </Layout>
        </div>
      </motion.div>
    </div>
  );
};
