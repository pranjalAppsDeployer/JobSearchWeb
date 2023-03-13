import React, { useState } from "react";
import { DropDown } from "./DropDown";
import { JobCard } from "./JobCard";
import { SkillTypeContainer } from "./SkillTypeContainer";
import { Toggle } from "./Toggle";

const skillTypes = [
  "Architecture",
  "Commercial Architecture",
  "Computational Deisgn",
  "Green Architecture",
  "Interior Architecture",
  "Interior Design",
  "Landscape Architecture",
  "Sustainable Architecture",
  "Urban Design",
  "Urban Planning",
  "Vernacular Architecture",
  "Parametic Architecture",
  "Residential Architecture",
];

export const JobsView = ({ searchJobsData, search }) => {
  const [isToggled, setIsToggled] = useState(true);
  const [sortBy, setSortBy] = useState("Newest");
  const [location, setLocation] = useState("On-Site");
  const [term, setTerm] = useState("Long-Term");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {search ? (
        <>
          <h3 style={{ fontSize: "18px", marginTop: "50px" }}>
            What types of jobs interest you?
          </h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3
              style={{
                fontSize: "24px",
                color: isToggled ? "#808285" : "#232427",
              }}
            >
              Full-Time
            </h3>
            <div style={{ marginRight: "32px", marginLeft: "32px" }}>
              <Toggle
                isToggled={isToggled}
                handleToggleClick={() => {
                  setIsToggled(!isToggled);
                }}
              />
            </div>
            <h3
              style={{
                fontSize: "24px",
                color: isToggled ? "#232427" : "#808285",
              }}
            >
              Freelance
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingLeft: "280px",
              paddingRight: "280px",
              justifyContent: "center",
            }}
          >
            {skillTypes.map((item) => {
              return <SkillTypeContainer label={item} />;
            })}
          </div>
        </>
      ) : (
        ""
      )}
      <div style={{ display: "flex", marginTop: "48px" }}>
        <img
          alt="Search"
          src="../assets/svgs/search.svg"
          style={{ position: "absolute", marginTop: 17, marginLeft: 25 }}
        />
        <input
          type={"text"}
          placeholder={"Search"}
          style={{
            backgroundColor: "#F0F2F8",
            borderRadius: "30px",
            borderColor: "transparent",
            height: 48,
            width: 848,
            paddingLeft: 60,
          }}
        />
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "33px" }}
        >
          <h3 style={{ fontSize: "16px", color: "#0F1420" }}>Sort By: </h3>
          <DropDown
            label={sortBy}
            options={["Newest", "Oldest"]}
            handelDropdownClick={(item) => {
              setSortBy(item);
            }}
          />
        </div>
      </div>
      {search ? (
        <>
          {" "}
          <div
            style={{
              display: "flex",
              alignSelf: "stretch",
              paddingLeft: "170px",
              paddingRight: "170px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flex: 1,
              }}
            >
              <div style={{ marginRight: "29px" }}>
                <DropDown
                  label={location}
                  options={["On-Site", "Remote"]}
                  handelDropdownClick={(item) => {
                    setLocation(item);
                  }}
                  border={true}
                />
              </div>
              <div>
                <DropDown
                  label={term}
                  options={["Long-Term", "Short-Term"]}
                  handelDropdownClick={(item) => {
                    setTerm(item);
                  }}
                  border={true}
                />
              </div>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "16px",
                  color: "#808285",
                  padding: "15px",
                  border: "1.5px solid #808285",
                  borderRadius: "40px",
                }}
              >
                Clear All
              </h3>
            </div>
          </div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              marginLeft: "180px",
              marginTop: "0px",
            }}
          >
            <p style={{ fontSize: "16px", fontWeight: "700", marginRight: 4 }}>
              2
            </p>
            results
          </p>
        </>
      ) : (
        ""
      )}
      <div style={{ marginTop: search ? "0px" : "32px", alignSelf: "stretch" }}>
        {searchJobsData
          .filter((item) => {
            if (isToggled && item.jobType === "Freelance") {
              return item;
            } else if (!isToggled && item.jobType === "Full-Time") {
              return item;
            }
          })
          .map((item) => {
            return <JobCard jobCardData={item} search={search} />;
          })}
      </div>
    </div>
  );
};
