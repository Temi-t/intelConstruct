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
  // const formStyle = {
  //   display: "flex",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   background: "orange",
  // };
  const labelStyle = {
    fontSize: "13px",
    display: "inline-block",
    width: "100%",
    textAlign: "left",
    color: "grey",
  };
  return (
    <AccFormS>
      <H3>Basic Company info</H3>
      {/* <form>
        <InputContainer>
          <LeftInput>
            <FormInput title="Company Name" />
            <FormInput title="Office Phone" />
            <FormInput title=" Website" />
            <FormInput title="Percent Self Performed Work: Project 5" />
            <FormInput title=" Main Invitation to BidPerson" />
          </LeftInput>
          <RightInput>
            <FormInput title="Office Address" />
            <FormInput title="Fax" />
            <FormInput title="Type Of Contractor" />
            <FormInput title="Trade-Scope-Work Specialty" />
            <FormInput title="Estimating email" />
          </RightInput>
        </InputContainer>
        <ButtonContainer>
          <Button
            variant="primary"
            size="md"
            className="btn-extra"
            type="submit"
          >
            Next{" "}
            <FontAwesomeIcon
              icon={solid("arrow-right")}
              size="1x"
              color="white"
            />
          </Button>
        </ButtonContainer>
      </form> */}
      <Form>
        {/* <Form.Group className="mb-3 form-row" controlId="formBasicEmail"> */}
        {/* <LeftInput className="col"> */}
        <Row>
          <Col>
            <Form.Label className="" style={labelStyle}>
              Company Name
            </Form.Label>
            <Form.Control type="text" className="mb-3" />
          </Col>
          <Col>
            <Form.Label className="" style={labelStyle}>
              Office Address{" "}
            </Form.Label>
            <Form.Control type="text" className="mb-3" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label className="" style={labelStyle}>
              Office Phone{" "}
            </Form.Label>
            <Form.Control type="text" className="mb-3" />
          </Col>
          <Col>
            <Form.Label className="" style={labelStyle}>
              Fax{" "}
            </Form.Label>
            <Form.Control type="text" className="mb-3" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label className="" style={labelStyle}>
              Website{" "}
            </Form.Label>
            <Form.Control type="text" className="mb-3" />
          </Col>
          <Col>
            <Form.Label className="" style={labelStyle}>
              Type of Contractor{" "}
            </Form.Label>
            <Form.Control type="text" className="mb-3" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label className="" style={labelStyle}>
              Percent Self Performed Work: Project 5{" "}
            </Form.Label>
            <Form.Control type="text" className="mb-3" />
          </Col>
          <Col>
            <Form.Label className="" style={labelStyle}>
              Trade-Scope-Work Specialty
            </Form.Label>
            <Form.Control type="text" className="mb-3" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label className="" style={labelStyle}>
              Main Invitation to Bid Person{" "}
            </Form.Label>
            <Form.Control type="text" className="mb-3" />
          </Col>
          <Col>
            <Form.Label className="" style={labelStyle}>
              Estimating email
            </Form.Label>
            <Form.Control type="text" className="mb-3" />
          </Col>
        </Row>
        <ButtonContainer>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </ButtonContainer>
      </Form>
    </AccFormS>
  );
}
