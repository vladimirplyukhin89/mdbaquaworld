import React, { useState } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";

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
import frame2 from "../../../img/types/typesFrame-2.webp";
import frame3 from "../../../img/types/typesFrame-3.webp";
import frame4 from "../../../img/types/typesFrame-4.webp";

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
  const { t } = useTranslation();

  const handleClickBlocks = () => {
    setShowBlock(prev => !prev);
  };

  const handleClickFrames = () => {
    setShowFrames(prev => !prev);
  };

  return (
    <MDBContainer fluid className="examples" id="examples">
      <h2 className="examples__title">{t("examples_title")}</h2>{" "}
      <Layout>
        <MDBRow className="examples__blocks">
          <MDBCol sm={12} md={6}>
            <ExCarousel images={carouselBlocks} />
          </MDBCol>
          <MDBCol sm={12} md={6}>
            <ExInfo
              title={t("blocks_title")}
              text={t("blocks_text")}
              subtext={t("blocks_subtext")}
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
                  {t("blocks_title")}
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
                    {t("options_close")}
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
              title={t("frames_title")}
              text={t("frames_text")}
              subtext={t("frames_subtext")}
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
                  {t("frames_title")}
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
                    {t("options_close")}
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
