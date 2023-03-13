import React from "react";

export const SkillTypeContainer = ({
  label,
  border = true,
  textColor = "#0F1420",
  backgroundColor = "#FFFFFF",
}) => {
  return (
    <p
      style={{
        marginRight: "10px",
        marginTop: "10px",
        marginBottom: "0px",
        marginLeft: "0px",
        fontSize: "16px",
        fontWeight: "400",
        color: textColor,
        border: border ? "1.5px solid #0F1420" : "",
        borderRadius: "40px",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "16px",
        paddingRight: "16px",
        backgroundColor: backgroundColor,
      }}
    >
      {label}
    </p>
  );
};
