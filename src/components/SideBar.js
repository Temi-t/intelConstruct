import React, { useState } from "react";
import { SideBarS, Div } from "./styles/SideBar.styled";
import { Link } from "react-router-dom";
import "../index.css";
//import { iconDiv } from "./styles/SideBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { SidebarData } from "../utils.js/SidebarData";

export default function SideBar({ iconDiv }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    console.log("sidebar CLICKED");
    setSidebar(!sidebar);
  };
  const iconBox = {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "5px",
    color: "white",
    alignItems: "center",
    padding: "10px",
    // backgroundColor: "aqua",
  };
  const active = {
    width: "300px",
    transition: "all 400ms",
  };
  const inactive = {
    transition: "650ms",
  };
  const expand = sidebar ? active : inactive;

  return (
    // <SideBarS className="col-sm-1">
    // <SideBarS style={sidebar ? "nav-menu active" : "nav-menu"}>
    <SideBarS style={expand}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          paddingBottom: "50px",
        }}
        onClick={showSidebar}
      >
        {sidebar && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "60px",
              // opacity: "1",
              // transition: "opacity 600ms ease",
            }}
          >
            <FontAwesomeIcon icon={solid("xmark")} size="2x" color="white" />
          </div>
        )}
        {!sidebar && (
          <FontAwesomeIcon icon={solid("bars")} size="2x" color="white" />
        )}
        {!sidebar && (
          <FontAwesomeIcon
            icon={solid("chevron-right")}
            size="1x"
            color="white"
          />
        )}
      </div>
      <div style={{ width: "100%" }}>
        {/*
        Home, brief case, people, office, location, envelope
        */}
        {/* <Link to="/">
          <div style={iconBox} className="active">
            <FontAwesomeIcon icon={solid("house")} size="2x" color="white" />
          </div>
        </Link>
        <Link to="/works">
          <div style={iconBox}>
            <FontAwesomeIcon icon={solid("briefcase")} size="2x" color="grey" />
          </div>
        </Link>
        <Link to="/">
          <div style={iconBox}>
            <FontAwesomeIcon icon={solid("user")} size="2x" color="grey" />
          </div>
        </Link>
        <div style={iconBox}>
          <FontAwesomeIcon icon={solid("building")} size="2x" color="grey" />
        </div>
        <div style={iconBox}>
          <FontAwesomeIcon
            icon={solid("location-dot")}
            size="2x"
            color="grey"
          />
        </div>
        <div style={iconBox}>
          <FontAwesomeIcon icon={solid("envelope")} size="2x" color="grey" />
        </div>*/}
        {SidebarData.map((item, i) => (
          <Link
            key={"icon_" + i}
            to={item.path}
            style={{ textDecoration: "none" }}
          >
            <Div style={iconBox}>
              {item.icon}
              {/* <span>{item.title}</span> */}
              {sidebar ? (
                <span
                  style={{
                    opacity: "0.8",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "18",
                    transition: "opacity 600ms",
                  }}
                >
                  {item.title}
                </span>
              ) : null}
            </Div>
          </Link>
        ))}
      </div>
    </SideBarS>
  );
}
