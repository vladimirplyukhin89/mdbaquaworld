import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

import { Layout } from "../Layout/Layout";
import { ListContainer } from "./ListContainer/ListContainer";

import "./Areas.css";

export const Areas = () => {
  return (
    <MDBContainer fluid className="p-0">
      <section className="area">
        <MDBRow>
          <MDBCol>
            <h2 className="area__title">
              Области применения систем очистки воды
            </h2>
            <Layout>
              <p className="fs-4 area__subtitle">
                <MDBIcon fas icon="star" className="area__icon" />
                Мы проектируем, устанавливаем, и обслуживаем промышленное
                оборудование от ведущих мировых производителей по очистке воды
                для предприятий всех отраслей — от небольших гостиничных
                комплексов до крупных промышленных компаний и объектов
                стратегического назначения:
              </p>
            </Layout>
          </MDBCol>
          <ListContainer />
        </MDBRow>
      </section>
    </MDBContainer>
  );
};
