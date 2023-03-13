import React from "react";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        maxHeight: "65px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "24px",
          flexGrow: 1,
        }}
      >
        <img
          alt="logo"
          src="../assets/svgs/logo.svg"
          style={{
            marginRight: "16px",
            height: 44,
            width: 44,
            marginTop: "8px",
          }}
        />
        <h1 style={{ color: "#14203A", marginTop: "9px" }}>Archslate</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            textAlign: "center",
            marginRight: "32px",
          }}
        >
          <img
            alt="Candidates"
            src="../assets/svgs/star.svg"
            style={{ marginTop: "11px" }}
          />
          <h6
            style={{ fontSize: "11px", marginTop: "7px", marginBottom: "11px" }}
          >
            Candidates
          </h6>
        </div>

        <div style={{ textAlign: "center", marginRight: "32px" }}>
          <img
            alt="Candidates"
            src="../assets/svgs/globe.svg"
            style={{ marginTop: "11px" }}
          />
          <h6 style={{ fontSize: "11px", marginTop: "7px" }}>Companies</h6>
        </div>

        <div style={{ textAlign: "center", marginRight: "32px" }}>
          <img
            alt="Candidates"
            src="../assets/svgs/bag.svg"
            style={{ marginTop: "11px" }}
          />
          <h6 style={{ fontSize: "11px", marginTop: "9px" }}>Jobs</h6>
        </div>

        <div style={{ textAlign: "center", marginRight: "32px" }}>
          <img
            alt="Candidates"
            src="../assets/svgs/mail.svg"
            style={{ marginTop: "12px" }}
          />
          <h6 style={{ fontSize: "11px", marginTop: "9px" }}>Notifications</h6>
        </div>

        <div style={{ textAlign: "center", marginRight: "34px" }}>
          <img
            alt="Candidates"
            src="../assets/svgs/person.svg"
            style={{ marginTop: "11px" }}
          />
          <h6 style={{ fontSize: "11px", marginTop: "8px" }}>User Name</h6>
        </div>
      </div>
    </div>
  );
};
