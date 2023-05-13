import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

import bgVideo from "./video/hero.mp4";

export const Hero = () => {
  return (
    <div className="text-center bg-image h-100">
      <video
        style={{ minWidth: "100%", minHeight: "100%" }}
        playsInline
        autoPlay
        muted
        loop>
        <source className="h-100" src={bgVideo} type="video/mp4" />
      </video>

      <div
        className="mask h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">
              Высокопроизводительные системы очистки воды
            </h1>
            <h4 className="mb-3">
              {" "}
              Очищаем воду для решения любых Ваших задач и производственных
              целей.
              <br /> Экономим Ваши ресурсы, делая автоматизированные системы
              очистки воды доступными.
            </h4>
            <MDBBtn className="btn btn-lg" href="#!" role="button">
              Call to action
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
