import { MDBIcon } from "mdb-react-ui-kit";

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
    alt: "start",
    arrow: <MDBIcon fas icon="arrow-right" />
  },
  { text: "Механическая очистка", img: purification, alt: "purification" },
  { text: "Осветление", img: clarification, alt: "clarification" },
  { text: "Комплексная очистка", img: cleaning, alt: "cleaning" },
  { text: "Ультрафильтрация", img: ultrafication, alt: "ultrafication" },
  { text: "УФ-дезинфекция", img: disinfection, alt: "disinfection" },
  { text: "", img: end, alt: "end" }
];

export const imagesSeaWater = [
  { text: "", img: start, alt: "start" },
  { text: "Механическая очистка", img: purification, alt: "purification" },
  { text: "Осветление", img: clarification, alt: "clarification" },
  { text: "Ультрафильтрация", img: ultrafication, alt: "ultrafication" },
  { text: "Сорбция", img: sorption, alt: "sorption" },
  { text: "Осмос", img: osmosis, alt: "osmosis" },
  { text: "УФ-дезинфекция", img: disinfection, alt: "disinfection" },
  { text: "", img: end, alt: "end" }
];
