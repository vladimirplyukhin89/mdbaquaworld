import React, { useState } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

import { Layout } from "../Layout";
import { ExCarousel } from "./ExCarousel";
import { ExInfo } from "./ExInfo/ExInfo";
import { ExFrames } from "./ExVariants";

import { carouselBlocks } from "./img";
import { carouselFrames } from "./img";

import "./Example.css";

export const Examples = () => {
  const [showBlock, setShowBlock] = useState(false);
  const [showFrames, setShowFrames] = useState(false);

  const handleClickBlocks = () => {
    setShowBlock(prev => !prev);
  };

  const handleClickFrames = () => {
    setShowFrames(prev => !prev);
  };

  return (
    <MDBContainer fluid className="examples">
      <h2 className="examples__title">Варианты исполнения</h2>{" "}
      <Layout>
        <MDBRow className="examples__blocks">
          <MDBCol sm={12} md={6}>
            <ExCarousel images={carouselBlocks} />
          </MDBCol>
          <MDBCol sm={12} md={6}>
            <ExInfo
              title="Блочные системы"
              text="Наш многолетний опыт и применяемые технологии позволяют эффективно
        решать задачи водоподготовки любой сложности."
              subtext="Наш инженерный состав, учитывая все тонкости и особенности, подберет
        вариант исполнения, подходящий именно вашей компании."
              handle={handleClickBlocks}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>{showBlock && 1}</MDBCol>
        </MDBRow>

        <MDBRow className="examples__frames">
          <MDBCol sm={12} md={6}>
            <ExCarousel images={carouselFrames} />
          </MDBCol>
          <MDBCol sm={12} md={6}>
            <ExInfo
              title="Рамно-модульные"
              text="Данный вариант предназначен для установки в существующем
											или проектируемом помещении."
              subtext="Станция поставляется в полной заводской готовности
											и требует минимального времени монтажных и пусконаладочных
											работ на месте эксплуатации."
              handle={handleClickFrames}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>{showFrames && <ExFrames />}</MDBCol>
        </MDBRow>
      </Layout>
    </MDBContainer>
  );
};