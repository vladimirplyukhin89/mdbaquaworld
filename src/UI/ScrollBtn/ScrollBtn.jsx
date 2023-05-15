import React, { useState, useEffect, useRef } from "react";
import { MDBIcon } from "mdb-react-ui-kit";

import "./ScrollBtn.css";

export const ScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      scrollRef.current = window.scrollY;
      if (scrollRef.current > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleTouchMove = () => {
      toggleVisibility();
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    isVisible && (
      <div ref={scrollRef} className="wrapper" onClick={scrollToTop}>
        <MDBIcon icon="chevron-up" className="wrapper__btn" />
      </div>
    )
  );
};
