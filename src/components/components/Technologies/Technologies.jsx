import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { motion } from "framer-motion";

import { CardContainer } from "./CardContainer/CardContainer";
import { Thesis } from "./Thesis/Thesis";
import { imagesFreshWater } from "../../../img/technologies/index";
import { imagesSeaWater } from "../../../img/technologies/index";

import dirtyWater from "../../../img/technologies/tech-0.webp";

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
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      id="technologies">
      <MDBContainer fluid className="px-0 technology">
        <h2 className="text-center fw-bolder py-5 pb-3 my-0 technology__title">
          Применяемые технологии
        </h2>
        <motion.h3
          variants={textAnimation}
          custom={2}
          className="text-center fw-bolder technology__subtitle">
          Стандартная технологическая схема модульных систем водоподготовки
        </motion.h3>

        <MDBRow>
          <MDBCol>
            <CardContainer text="Пресная вода" images={imagesFreshWater} />
            <Thesis
              text="Контейнерные очистные сооружения для обработки речных вод, с
        использованием технологий ультрафикации"
            />
            <CardContainer
              text="Для опреснения морской воды"
              images={imagesSeaWater}
            />
            <Thesis
              text="Для обработки соленоватых и морских вод выпускаются установки
        опреснения, где используются ультрафильтрационные и мембранные
        технологии"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </motion.div>
  );
};
