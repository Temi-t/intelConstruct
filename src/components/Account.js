import React from "react";
import "../index.css";
//import { AccountS } from "./styles/Account.styled.js";
import AccForm from "./AccForm";
import AccDetails from "./AccDetails";
import Container from "react-bootstrap/Container";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function Account() {
  const H2 = {
    fontFamily: "Oswald",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: "36px",
  };
  const accStyle = {
    display: "flex",
    height: "100%",
    // width: "100%",
    flexWrap: "wrap",
    alignContent: "flex-start",
  };
  return (
    <Container fluid className="main-container">
      <h2 style={H2}>Account</h2>
      {/* <FontAwesomeIcon icon={solid("user-secret")} size="10x" /> */}
      {/* <FontAwesomeIcon icon={regular("coffee")} /> */}
      {/* <FontAwesomeIcon icon={icon({ name: "coffee", style: "solid" })} /> */}
      {/* <FontAwesomeIcon icon={brands("twitter")} /> */}

      <hr />
      <br />
      <div style={accStyle}>
        <AccDetails />
        <AccForm />
      </div>
    </Container>
  );
}

// <AccountS>
// </AccountS>
