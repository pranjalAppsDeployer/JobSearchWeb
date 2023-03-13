import React from "react";
import "../css/dropDown.css";

export const DropDown = ({
  label,
  options,
  handelDropdownClick,
  border = false,
}) => {
  return (
    <div
      class="dropdown"
      style={{
        display: "flex",
        borderRadius: "30px",
        border: border ? "1.5px solid #000000" : "",
        paddingTop: border ? "10px" : "",
        paddingBottom: border ? "10px" : "",
        paddingRight: border ? "15px" : "",
        paddingLeft: border ? "15px" : "",
      }}
    >
      {border ? (
        <div style={{ marginRight: "5px" }}>
          <img alt="Icon" src="../assets/svgs/filterIcon.svg" />
        </div>
      ) : (
        ""
      )}
      <button class="dropbtn">{label}</button>
      <div class="dropdown-content" style={{ marginTop: 25 }}>
        {options.map((item) => {
          return (
            <a
              onClick={() => {
                handelDropdownClick(item);
              }}
            >
              {item}
            </a>
          );
        })}
      </div>
      <div style={{ marginLeft: "10px" }}>
        <img alt="Down Arrow" src="../assets/svgs/downArrow.svg" />
      </div>
    </div>
  );
};
