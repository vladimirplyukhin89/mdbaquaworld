import React from "react";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { Areas } from "./components/Areas";
import { Examples } from "./components/Examples";
import { Benefits } from "./components/Benefits";
import { Technologies } from "./components/Technologies";
import { Countries } from "./components/Countries";
import { Form } from "./components/Form";
import { Questions } from "./components/Questions";
import { ScrollBtn } from "../UI/ScrollBtn";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <Areas />
      <Examples />
      <Benefits />
      <Technologies />
      <Countries />
      <Form />
      <Questions />
      <Footer />
      <ScrollBtn />
    </>
  );
}

export default App;
