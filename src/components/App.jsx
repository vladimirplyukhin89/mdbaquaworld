import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <MDBContainer fluid></MDBContainer>
      <Footer />
    </>
  );
}

export default App;
