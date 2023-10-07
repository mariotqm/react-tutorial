import React from "react";

const inputStyle = {
  border: "2px solid #000",
  borderRadius: "3px",
  padding: "5px",
  margin: "5px 0",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  backgroundColor: "#fff",
  color: "#000",
  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
  outline: "none",
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  fontWeight: "bold",
  color: "#000",
};

const divStyle = {
  marginBottom: "10px",
  backgroundColor: "whitesmoke",
  border: "2px solid #000",
  padding: "1rem",
};

const Input = ({ label, ...rest }) => {
  return (
    <div style={divStyle}>
      <label style={labelStyle}>{label}</label>
      <input style={inputStyle} {...rest} />
    </div>
  );
};

export default Input;
