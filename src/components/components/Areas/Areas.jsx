import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { motion } from "framer-motion";

import { Layout } from "../Layout/Layout";
import { MListContainer } from "./ListContainer/ListContainer";

import "./Areas.css";

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

export const Areas = () => {
  return (
    <MDBContainer fluid className="p-0">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="area">
        <MDBRow className="mx-auto">
          <MDBCol>
            <motion.h2
              custom={1}
              variants={textAnimation}
              className="area__title">
              Области применения систем очистки воды
            </motion.h2>
            <Layout>
              <motion.p
                custom={2}
                variants={textAnimation}
                className="fs-4 area__subtitle">
                <MDBIcon fas icon="star" className="area__icon" />
                Мы проектируем, устанавливаем, и обслуживаем промышленное
                оборудование от ведущих мировых производителей по очистке воды
                для предприятий всех отраслей — от небольших гостиничных
                комплексов до крупных промышленных компаний и объектов
                стратегического назначения:
              </motion.p>
            </Layout>
          </MDBCol>

          <div className="mx-auto">
            <MListContainer />
          </div>
        </MDBRow>
      </motion.section>
    </MDBContainer>
  );
};
