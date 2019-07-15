import React from "react";
const InputCustom = ({ name_attr, value_attr, handleChange }) => {
  console.log("INI ADA YA BRO", name_attr);
  return (
    <input
      onChange={handleChange}
      name={name_attr}
      defaultValue=""
      placeholder={value_attr}
      style={{ margin: 30 }}
    />
  );
};

export default InputCustom;
