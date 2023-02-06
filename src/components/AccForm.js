import React from "react";
import "../index.css";
import {
  AccFormS,
  H3,
  LeftInput,
  RightInput,
  InputContainer,
  ButtonContainer,
} from "./styles/AccForm.styled";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FormInput from "./FormInput";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function AccForm() {
  const labelStyle = {
    fontSize: "13px",
    display: "inline-block",
    width: "100%",
    textAlign: "left",
    color: "grey",
  };

  let infoTitle = [
    { one: "Main Invitation to Bid Person", two: "Estimating email" },
    { one: "Company Name", two: " Office Address" },
    { one: "Office Phone", two: "Fax" },
    { one: "Website", two: "Type of Contractor" },
    {
      one: "Percent Self Performed Work: Project 5",
      two: "Trade-Scope-Work Specialty",
    },
    { one: "Main Invitation to Bid Person", two: "Estimating email" },
  ];

  return (
    <AccFormS>
      <H3>Basic Company info</H3>
      <Form>
        {/* <Form.Group className="mb-3 form-row" controlId="formBasicEmail"> */}
        {infoTitle.map((title, i) => (
          <Row key={"title_" + i}>
            <Col lg={true}>
              <Form.Label style={labelStyle}>{title.one} </Form.Label>
              <Form.Control type="text" className="mb-3" />
            </Col>
            <Col lg={true}>
              <Form.Label style={labelStyle}>{title.two} </Form.Label>
              <Form.Control type="text" className="mb-3" />
            </Col>
          </Row>
        ))}

        <ButtonContainer>
          <Button type="submit" style={{ background: "#276FB4" }}>
            Next{" "}
            <FontAwesomeIcon
              icon={solid("arrow-right")}
              size="1x"
              color="white"
            />
          </Button>
        </ButtonContainer>
      </Form>
    </AccFormS>
  );
}
