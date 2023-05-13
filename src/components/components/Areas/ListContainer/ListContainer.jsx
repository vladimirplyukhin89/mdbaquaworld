import React from "react";

import { ListItem } from "./ListItem/ListItem";
import { images } from "./img";

import "./ListContainer.css";

export const ListContainer = () => {
  return (
    <ul className="container">
      {images.map((item, i) => {
        return <li key={i}>{<ListItem {...item} />}</li>;
      })}
    </ul>
  );
};
