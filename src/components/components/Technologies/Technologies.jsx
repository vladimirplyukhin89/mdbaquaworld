import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

import { CardContainer } from "./CardContainer/CardContainer";
import { Thesis } from "./Thesis/Thesis";
import { imagesFreshWater } from "./CardContainer/img";
import { imagesSeaWater } from "./CardContainer/img";

import "./Technologies.css";

export const Technologies = () => {
  return (
    <MDBContainer fluid className="px-0 technology">
      <h2 className="text-center fw-bolder py-5 pb-3 my-0 technology__title">
        Применяемые технологии
      </h2>
      <h3 className="text-center mb-4 fw-bolder technology__subtitle">
        Стандартная технологическая схема модульных систем водоподготовки
      </h3>
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
    </MDBContainer>
  );
};
