import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { CardContainer } from "./CardContainer/CardContainer";
import { Thesis } from "./Thesis/Thesis";
import { imagesFreshWater } from "../../../img/technologies/index";
import { imagesSeaWater } from "../../../img/technologies/index";

import "./Technologies.css";

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
      delay: custom * 0.1,
      duration: 1
    }
  })
};

export const Technologies = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      id="technologies">
      <MDBContainer fluid className="px-0 technology">
        <h2 className="text-center fw-bolder py-5 pb-3 my-0 technology__title">
          {t("technologies_title")}
        </h2>
        <motion.h3
          variants={textAnimation}
          custom={2}
          className="text-center fw-bolder technology__subtitle">
          {t("technologies_subtitle")}
        </motion.h3>

        <MDBRow>
          <MDBCol>
            <CardContainer
              text={t("technologies_subtitle_2")}
              images={imagesFreshWater}
            />
            <Thesis text={t("technologies_thesis")} />
            <CardContainer
              text={t("technologies_subtitle_3")}
              images={imagesSeaWater}
            />
            <Thesis text={t("technologies_thesis_2")} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </motion.div>
  );
};
