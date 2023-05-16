import React, { useState } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";

import { Layout } from "../Layout";
import { ExCarousel } from "./ExCarousel";
import { ExInfo } from "./ExInfo/ExInfo";
import { ExFrames } from "./ExFrames";
import { ExBlocks } from "./ExBlocks";

import { examplesFrames } from "./data";
import { examplesBlocks } from "./data";
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
    <MDBContainer fluid className="examples" id="examples">
      <h2 className="examples__title">Варианты исполнения</h2>{" "}
      <Layout>
        <MDBRow className="examples__blocks">
          <MDBCol sm={12} md={6}>
            {/* <ExCarousel images={carouselBlocks} /> */}
          </MDBCol>
          <MDBCol sm={12} md={6}>
            <ExInfo
              title="Блочные системы"
              text="Наш многолетний опыт и применяемые технологии позволяют эффективно
        решать задачи водоподготовки любой сложности."
              subtext="Наш инженерный состав, учитывая все тонкости и особенности, подберет
        вариант исполнения, подходящий именно вашей компании."
              handle={handleClickBlocks}
              show={showBlock}
            />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            {showBlock && (
              <>
                <h2 className="mt-3 mb-5 examples__frames-title">
                  Блочные системы
                </h2>
                {examplesBlocks.map((example, i) => (
                  <ExBlocks
                    key={i}
                    handle={handleClickBlocks}
                    example={example}
                  />
                ))}
                <MDBBtn
                  className="d-flex justify-content-center mx-auto mb-5"
                  onClick={handleClickBlocks}
                  href="#examples">
                  Свернуть
                </MDBBtn>
              </>
            )}
          </MDBCol>
        </MDBRow>

        <MDBRow className="examples__frames">
          <MDBCol sm={12} md={6}>
            {/* <ExCarousel images={carouselFrames} /> */}
          </MDBCol>
          <MDBCol sm={12} md={6}>
            <ExInfo
              title="Рамно-модульные системы"
              text="Данный вариант предназначен для установки в существующем
											или проектируемом помещении."
              subtext="Станция поставляется в полной заводской готовности
											и требует минимального времени монтажных и пусконаладочных
											работ на месте эксплуатации."
              handle={handleClickFrames}
              show={showFrames}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            {showFrames && (
              <>
                <h2 className="mt-3 mb-5 examples__frames-title">
                  Рамно-модульные системы
                </h2>
                {examplesFrames.map((example, i) => (
                  <ExFrames
                    key={i}
                    handle={handleClickFrames}
                    example={example}
                  />
                ))}
                <MDBBtn
                  className="d-flex justify-content-center mx-auto"
                  onClick={handleClickFrames}
                  href="#examples">
                  Свернуть
                </MDBBtn>
              </>
            )}
          </MDBCol>
        </MDBRow>
      </Layout>
    </MDBContainer>
  );
};
