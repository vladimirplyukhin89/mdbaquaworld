import React from "react";
import {
  MDBContainer,
  MDBAccordion,
  MDBAccordionItem,
  MDBIcon,
  MDBRipple
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { questionsData } from "./data";

import "./Questions.css";

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

export const Questions = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}>
      <MDBContainer fluid className="questions">
        <h3 className="pt-5 fw-bolder text-center">{t("questions_title")}</h3>
        <motion.div variants={textAnimation} custom={2}>
          <MDBAccordion
            flush
            initialActive={1}
            className="px-3 py-5 questions__wrapper">
            {questionsData.map(({ id, title, content }) => (
              <MDBRipple key={id} className="w-100">
                <MDBAccordionItem
                  collapseId={id}
                  className="questions__text"
                  headerTitle={
                    <>
                      <MDBIcon fas icon="tint" className="questions__icon" />
                      {t(title)}
                    </>
                  }>
                  {content.map((paragraph, index) => (
                    <p key={index}>{t(paragraph)}</p>
                  ))}
                </MDBAccordionItem>
              </MDBRipple>
            ))}
          </MDBAccordion>
        </motion.div>
      </MDBContainer>
    </motion.div>
  );
};
