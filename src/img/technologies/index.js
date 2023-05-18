import arrow from "../arrow.webp";

import start from "./tech-0.webp";
import purification from "./tech-1.webp";
import clarification from "./tech-2.webp";
import cleaning from "./tech-3.webp";
import ultrafication from "./tech-4.webp";
import disinfection from "./tech-5.webp";
import sorption from "./tech-7.webp";
import osmosis from "./tech-8.webp";
import end from "./tech-6.webp";

export const imagesFreshWater = [
  {
    text: "",
    img: start,
    alt: "dirty water",
    arrow: arrow
  },
  {
    text: "Механическая очистка",
    img: purification,
    alt: "purification",
    arrow: arrow
  },
  {
    text: "Осветление",
    img: clarification,
    alt: "clarification",
    arrow: arrow
  },
  { text: "Комплексная очистка", img: cleaning, alt: "cleaning", arrow: arrow },
  {
    text: "Ультрафильтрация",
    img: ultrafication,
    alt: "ultrafication",
    arrow: arrow
  },
  {
    text: "УФ-дезинфекция",
    img: disinfection,
    alt: "disinfection",
    arrow: arrow
  },
  {
    text: "",
    img: end,
    alt: "clear water",
    arrow: ""
  }
];

export const imagesSeaWater = [
  {
    text: "",
    img: start,
    alt: "dirty water",
    arrow: arrow
  },
  {
    text: "Механическая очистка",
    img: purification,
    alt: "purification",
    arrow: arrow
  },
  {
    text: "Осветление",
    img: clarification,
    alt: "clarification",
    arrow: arrow
  },
  {
    text: "Ультрафильтрация",
    img: ultrafication,
    alt: "ultrafication",
    arrow: arrow
  },
  { text: "Сорбция", img: sorption, alt: "sorption", arrow: arrow },
  { text: "Осмос", img: osmosis, alt: "osmosis", arrow: arrow },
  {
    text: "УФ-дезинфекция",
    img: disinfection,
    alt: "disinfection",
    arrow: ""
  },
  {
    text: "",
    img: end,
    alt: "clear water",
    arrow: ""
  }
];
