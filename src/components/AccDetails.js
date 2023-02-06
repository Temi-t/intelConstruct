import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  AccDetailsS,
  CompanyCheckbox,
  Check,
  Label,
  //Accordion,
  //   CompanyDetails,
  CheckedLabel,
} from "./styles/AccDetails.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import CompanyDetails from "./CompanyDetails";
import CompanySelect from "./CompanySelect";

const companyChoice = [
  { id: 1, complete: false, label: "Company Info Continued" },
  { id: 2, complete: false, label: "Socials" },
  { id: 3, complete: false, label: "Organization Details" },
  { id: 4, complete: false, label: "Project History" },
  { id: 5, complete: false, label: "Current Work in Progress" },
  { id: 6, complete: false, label: "Completed in Last 5 Years" },
  { id: 7, complete: false, label: "Insurance" },
  { id: 8, complete: false, label: "Safety" },
  { id: 9, complete: false, label: "Finance" },
  { id: 10, complete: false, label: "Suppliers" },
  { id: 11, complete: false, label: "Legal" },
  { id: 12, complete: false, label: "Shipping/ Receiving" },
];

export default function AccDetails() {
  //const [selected, setSelected] = useState(false);
  const [choices, setChoices] = useState(companyChoice);

  //extra styles
  //const bgStyle = { foreground: "blue", color: "red" };
  const iconTitle = {
    width: "90%",
    display: "flex",
    alignItems: "center",
  };
  const accordionLabel = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "10px",
    lineHeight: "16px",
    width: "100%",
    letterSpacing: 0.3,
    color: "#888888",
  };
  //dynamic detail selection
  const details = [
    {
      title: "***Company Details**",
      icon: "file-lines",
      cheveron: "chevron-down",
    },
  ];
  //id: crypto.randomUUID(),
  //   const Checkbox = selected ? CompanyCheckbox : Check;
  //   const CompanyLabel = selected ? CheckedLabel : Label;
  function toggleChoice(id) {
    const newChoices = [...choices];
    console.log(newChoices);
    const selected = newChoices.find((choice) => choice.id === id);
    selected.complete = !selected.complete;
    setChoices(newChoices);
  }
  const accordionBg = { backgroundColor: "#F5F5F5" };

  return (
    <AccDetailsS>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div style={iconTitle}>
              <FontAwesomeIcon
                icon={solid("file-lines")}
                size="2x"
                color="#276FB4"
              />
              <span style={{ paddingLeft: "30px" }}>Company Details</span>
            </div>
          </Accordion.Header>
          <Accordion.Body style={accordionBg}>
            {/* <ProgressBar id="file" value="32" max="100">
              {" "}
              32%{" "}
            </ProgressBar> */}
            <ProgressBar variant="warning" now={8} style={{ height: "8px" }} />
            <label htmlFor="file" style={accordionLabel}>
              {" "}
              8% complete
            </label>

            {choices.map((choice, i) => (
              <CompanySelect
                key={"choice_" + i}
                choice={choice.label}
                // toggleChoice={toggleChoice}
                // selected={selected}
                // setSelected={setSelected}
              />
            ))}

            {/* <div className="form-check checkbox-lg" style={{ padding: "0" }}>
              <Checkbox
                class="form-check-input"
                type="checkbox"
                value=""
                id="checkbox-2"
                checked={selected}
                onClick={() => setSelected((prev) => !prev)}
              />
              <CompanyLabel htmlFor="checkbox-2">
                Company Info Continued
              </CompanyLabel>
            </div> */}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div style={iconTitle}>
              <FontAwesomeIcon
                icon={solid("cubes-stacked")}
                size="2x"
                color="#276FB4"
              />
              <span style={{ paddingLeft: "30px" }}>Datasets</span>
            </div>
          </Accordion.Header>
          <Accordion.Body style={accordionBg}>
            Lorem ipsum deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <div style={iconTitle}>
              <FontAwesomeIcon
                icon={solid("floppy-disk")}
                size="2x"
                color="#276FB4"
              />
              <span style={{ paddingLeft: "30px" }}>Saved search</span>
            </div>
          </Accordion.Header>
          <Accordion.Body style={accordionBg}>
            Lorem ipsum deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <div style={iconTitle}>
              <FontAwesomeIcon
                icon={solid("file-invoice-dollar")}
                size="2x"
                color="#276FB4"
              />
              <span style={{ paddingLeft: "30px" }}>Billing</span>
            </div>
          </Accordion.Header>
          <Accordion.Body style={accordionBg}>
            Lorem ipsum deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <div style={iconTitle}>
              <FontAwesomeIcon
                icon={solid("credit-card")}
                size="2x"
                color="#276FB4"
              />
              <span style={{ paddingLeft: "30px" }}>Payment Methods</span>
            </div>
          </Accordion.Header>
          <Accordion.Body style={accordionBg}>
            Lorem ipsum deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <CompanyDetails>
        <div style={iconTitle}>
          <FontAwesomeIcon
            icon={solid("file-lines")}
            size="2x"
            color="#276FB4"
          />
          <span style={{ paddingLeft: "30px" }}>Company Details</span>
        </div>
        <FontAwesomeIcon
          icon={solid("chevron-down")}
          size="1x"
          color="#276FB4"
        />
      </CompanyDetails>
      <Accordion>
        <ProgressBar id="file" value="32" max="100">
          {" "}
          32%{" "}
        </ProgressBar>
        <label htmFor="file" style={accordionLabel}>
          {" "}
          32% complete
        </label>
      </Accordion>
      <hr />
      <CompanyDetails>
        <div style={iconTitle}>
          <FontAwesomeIcon
            icon={solid("cubes-stacked")}
            size="2x"
            color="#276FB4"
          />
          <span style={{ paddingLeft: "30px" }}>Datasets</span>
        </div>
        <FontAwesomeIcon
          icon={solid("chevron-down")}
          size="1x"
          color="#276FB4"
          className="chevronStyle"
        />
      </CompanyDetails>
      <hr />
      <CompanyDetails>
        <div style={iconTitle}>
          <FontAwesomeIcon
            icon={solid("floppy-disk")}
            size="2x"
            color="#276FB4"
          />
          <span style={{ paddingLeft: "30px" }}>Saved search</span>
        </div>
        <FontAwesomeIcon
          icon={solid("chevron-down")}
          size="1x"
          color="#276FB4"
        />
      </CompanyDetails>
      <hr />
      <CompanyDetails>
        <div style={iconTitle}>
          <FontAwesomeIcon
            icon={solid("file-invoice-dollar")}
            size="2x"
            color="#276FB4"
          />
          <span style={{ paddingLeft: "30px" }}>Billing</span>
        </div>
        <FontAwesomeIcon
          icon={solid("chevron-down")}
          size="1x"
          color="#276FB4"
        />
      </CompanyDetails>
      <hr />
      <CompanyDetails>
        <div style={iconTitle}>
          <FontAwesomeIcon
            icon={solid("credit-card")}
            size="2x"
            color="#276FB4"
          />
          <span style={{ paddingLeft: "30px" }}>Payment Methods</span>
        </div>
        <FontAwesomeIcon
          icon={solid("chevron-down")}
          size="1x"
          color="#276FB4"
        />
      </CompanyDetails> */}
    </AccDetailsS>
  );
}
