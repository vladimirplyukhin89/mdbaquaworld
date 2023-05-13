import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

import { ListContainer } from "./ListContainer/ListContainer";

import "./Areas.css";

export const Areas = () => {
  return (
    <MDBContainer fluid className="p-0">
      <section className="application">
        <h2 className="application__title">
          Области применения систем очистки воды
        </h2>
        <h5 className="fs-4 application__subtitle">
          Мы проектируем, устанавливаем, и обслуживаем промышленное оборудование
          от ведущих мировых производителей по очистке воды для предприятий всех
          отраслей — от небольших гостиничных комплексов до крупных промышленных
          компаний и объектов стратегического назначения:
        </h5>
        <ListContainer />
      </section>
    </MDBContainer>
  );
};
