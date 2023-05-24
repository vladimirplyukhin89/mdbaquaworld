import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";

import { CardContainer } from "./CardContainer/CardContainer";
import { Thesis } from "./Thesis/Thesis";
import { imagesFreshWater } from "../../../img/technologies/index";
import { imagesSeaWater } from "../../../img/technologies/index";

import "./Technologies.css";

export const Technologies = () => {
  const { t } = useTranslation();

  return (
    <div id="technologies">
      <MDBContainer fluid className="px-0 technology">
        <h2 className="py-5 pb-3 technology__title">
          {t("technologies_title")}
        </h2>
        <h4 className="technology__subtitle">{t("technologies_subtitle")}</h4>

        <MDBRow>
          <MDBCol>
            <CardContainer
              text={t("technologies_subtitle_2")}
              images={imagesFreshWater}
            />
            <Thesis text={t("technologies_thesis")} />
            <CardContainer
              text={t("technologies_subtitle_3")}
              images={imagesSeaWater}
            />
            <Thesis text={t("technologies_thesis_2")} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
