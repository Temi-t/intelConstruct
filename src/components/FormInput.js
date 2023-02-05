import React from "react";

export default function FormInput({ title }) {
  const inputStyle = {
    width: "100%",
    height: "40px",
    borderRadius: "3px",
    marginBottom: "20px",
    border: "1px solid lightGrey",
  };
  return (
    <>
      <label
        style={{
          fontSize: "14px",
          display: "inline-block",
          width: "100%",
          textAlign: "left",
          color: "grey",
        }}
      >
        {title}
      </label>
      <input style={inputStyle} />
    </>
  );
}
