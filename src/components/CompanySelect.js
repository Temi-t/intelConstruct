import React, { useState, useRef } from "react";
import {
  AccDetailsS,
  CompanyCheckbox,
  Check,
  Label,
  //Accordion,
  //   CompanyDetails,
  ProgressBar,
  CheckedLabel,
} from "./styles/AccDetails.styled";

export default function CompanySelect({ choice, toggleChoice }) {
  const [isSelected, setIsSelected] = useState(false);
  //   const Checkbox = selected ? CompanyCheckbox : Check;
  //   const CompanyLabel = selected ? CheckedLabel : Label;

  /*
  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;  
    console.log(`${value} is ${checked}`);
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
*/
  const checkboxStyle = {
    //padding: "0",
    //background: "pink",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  };
  const colored = {
    paddingLeft: "10px",
    paddingBottom: "10px",
    fontWeight: "600",
    color: "#276fb4",
    transition: "all 400ms",
  };
  const bland = {
    paddingLeft: "10px",
    paddingBottom: "10px",
  };
  let labelStyle = isSelected ? colored : bland;
  //const handleCheckbox = () => toggleChoice(choice.id);
  return (
    <div className="form-check checkbox-lg" style={checkboxStyle}>
      <CompanyCheckbox
        className="form-check-input"
        type="checkbox"
        id={choice.id}
        name={choice.label}
        value={choice}
        onChange={(e) => {
          const { value, checked } = e.target;
          checked ? setIsSelected(true) : setIsSelected(false);
          //   console.log("value:", value, "checked:", checked);
        }}
      />
      <CheckedLabel htmlFor={choice.id} style={labelStyle}>
        {choice}
      </CheckedLabel>
    </div>
  );
}
