import React from "react";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { Areas } from "./components/Areas";
import { Technologies } from "./components/Technologies";
import { Countries } from "./components/Countries";
import { Form } from "./components/Form";
import { Questions } from "./components/Questions";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <Areas />
      <Technologies />
      <Countries />
      <Form />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
