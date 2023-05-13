import React from "react";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Form } from "./components/Form";
import { Questions } from "./components/Questions";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Form />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
