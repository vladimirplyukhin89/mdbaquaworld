import React from "react";
import { useTranslation } from "react-i18next";

import "./CardItem.css";

export const CardItem = ({ img, alt, text, arrow }) => {
  const { t } = useTranslation();

  return (
    <div className="technologies__card">
      <div className="technologies__wrapper">
        <img src={img} alt={alt} className="mx-auto technologies__icon" />
        <p className="py-0 technologies__text">{t(text)}</p>
      </div>
      <div className="technologies__arrow">
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};
