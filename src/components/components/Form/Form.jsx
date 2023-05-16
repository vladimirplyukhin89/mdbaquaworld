import React from "react";
import { MDBContainer, MDBInput, MDBBtn, MDBRipple } from "mdb-react-ui-kit";
import { motion } from "framer-motion";

import bgVideo from "./video/form.mp4";

const handleSubmit = event => {
  event.preventDefault();
};

const formAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 1
    }
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 1
    }
  })
};

export const Form = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="position-relative">
      <video
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          maxHeight: "100%",
          objectFit: "cover",
          zIndex: -2
        }}
        playsInline
        autoPlay
        muted
        loop>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}></div>

      <MDBContainer
        fluid
        className="m-0 p-0 d-flex justify-content-center "
        style={{ height: "80vh" }}>
        <motion.form
          onSubmit={handleSubmit}
          className="w-50 pt-5 mt-5 form-outline form-white"
          variants={formAnimation}
          custom={1}>
          <MDBInput
            className="mb-4"
            type="text"
            id="form3Example1"
            label="First name"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
          />

          <MDBInput
            className="mb-4"
            type="email"
            id="form1Example2"
            label="Email address"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
          />
          <MDBInput
            className="mb-4"
            type="phone"
            id="form1Example3"
            label="Phone"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
          />

          <MDBInput
            wrapperClass="mb-4 textarea-lg"
            textarea="true"
            id="form4Example4"
            rows={6}
            label="Message"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
          />

          {/* <MDBCheckbox
        wrapperClass="d-flex justify-content-start mb-4"
        id="form4Example4"
        label="Я согласен"
        defaultChecked
      /> */}

          <div>
            <MDBRipple className="mb-4 w-100">
              <MDBBtn type="submit" className="w-100">
                Отправить
              </MDBBtn>
            </MDBRipple>
          </div>
        </motion.form>
      </MDBContainer>
    </motion.div>
  );
};
