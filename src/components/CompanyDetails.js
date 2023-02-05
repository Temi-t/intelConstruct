import React from "react";
import { CompanyDetailsStyle } from "./styles/AccDetails.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function CompanyDetails({ title, icon, chevron }) {
  const iconTitle = {
    width: "90%",
    display: "flex",
    alignItems: "center",
  };
  return (
    <CompanyDetailsStyle>
      <div style={iconTitle}>
        <FontAwesomeIcon icon={solid("file-lines")} size="2x" color="#276FB4" />
        <span style={{ paddingLeft: "30px" }}>Company Details</span>
      </div>
      <FontAwesomeIcon icon={solid("chevron-down")} size="1x" color="#276FB4" />
    </CompanyDetailsStyle>
  );
}
