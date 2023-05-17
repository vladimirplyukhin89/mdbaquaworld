import React from "react";
import { MDBContainer, MDBCol, MDBRow, MDBIcon } from "mdb-react-ui-kit";
import { motion } from "framer-motion";

import { Layout } from "../Layout";

import "./Countries.css";

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

export const Countries = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}>
      <MDBContainer fluid className="countries py-5" id="geography">
        <MDBRow>
          <MDBCol className="pt-3 mb-2 text-center">
            <h2 className="countries__title">География наших объектов</h2>
            <Layout>
              <motion.p
                variants={textAnimation}
                custom={2}
                className="fs-4 countries__block">
                <MDBIcon icon="globe" className="countries__block-globe" />
                Наши системы очистки воды успешно эксплуатируются в различных
                компаниях на территории России, Грузии и Алжира
              </motion.p>
            </Layout>
          </MDBCol>
        </MDBRow>

        <motion.div variants={textAnimation} custom={3}>
          <MDBRow className=" d-flex justify-content-around align-items-center countries__cards">
            <MDBCol md="4" className="mx-2 my-4 countries__drop">
              <div className="countries__icon countries__icon-1"></div>
              <p className="text-center pt-5 fw-bolder fs-5">Россия</p>
            </MDBCol>

            <MDBCol md="4" className="mx-2 my-4 countries__drop">
              <div className="countries__icon countries__icon-2"></div>
              <p className="text-center pt-5 fw-bolder fs-5">Алжир</p>
            </MDBCol>

            <MDBCol md="4" className="mx-2 my-4 countries__drop">
              <div className="countries__icon countries__icon-3"></div>
              <p className="text-center pt-5 fw-bolder fs-5">Грузия</p>
            </MDBCol>
          </MDBRow>
        </motion.div>
      </MDBContainer>
    </motion.div>
  );
};
