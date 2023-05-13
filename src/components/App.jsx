import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <MDBContainer fluid></MDBContainer>
    </>
  );
}

export default App;
