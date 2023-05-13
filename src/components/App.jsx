import React from "react";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Form } from "./components/Form";
import { Questions } from "./components/Questions";
import { Countries } from "./components/Countries";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Countries />
      <Form />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
