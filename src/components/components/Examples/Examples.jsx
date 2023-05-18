import React, { useState } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";

import { Layout } from "../Layout";
import { ExCarousel } from "./ExCarousel";
import { ExInfo } from "./ExInfo/ExInfo";
import { ExFrames } from "./ExFrames";
import { ExBlocks } from "./ExBlocks";

import { examplesFrames } from "./data";
import { examplesBlocks } from "./data";

import block1 from "../../../img/types/typesBlock-1.webp";
import block2 from "../../../img/types/typesBlock-2.webp";
import block3 from "../../../img/types/typesBlock-3.webp";
import block4 from "../../../img/types/typesBlock-4.webp";
import frame1 from "../../../img/types/typesFrame-1.webp";
import frame2 from "../../../img/types/typesBlock-2.webp";
import frame3 from "../../../img/types/typesBlock-3.webp";
import frame4 from "../../../img/types/typesBlock-4.webp";

const carouselBlocks = [
  { src: block1, alt: "block1" },
  { src: block2, alt: "block2" },
  { src: block3, alt: "block3" },
  { src: block4, alt: "block4" }
];

const carouselFrames = [
  { src: frame1, alt: "frame1" },
  { src: frame2, alt: "frame2" },
  { src: frame3, alt: "frame3" },
  { src: frame4, alt: "frame4" }
];

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
                <div className="mb-5 examples__button">
                  <MDBBtn onClick={handleClickBlocks} href="#examples">
                    Свернуть
                  </MDBBtn>
                </div>
              </>
            )}
          </MDBCol>
        </MDBRow>

        <MDBRow className="examples__frames">
          <MDBCol sm={12} md={6}>
            <ExCarousel images={carouselFrames} />
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
                <div className="examples__button">
                  <MDBBtn onClick={handleClickFrames} href="#examples">
                    Свернуть
                  </MDBBtn>
                </div>
              </>
            )}
          </MDBCol>
        </MDBRow>
      </Layout>
    </MDBContainer>
  );
};
