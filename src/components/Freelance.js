import React from "react";
import { Navbar } from "./Navbar";
import { SkillTypeContainer } from "./SkillTypeContainer";

export const Freelance = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingRight: "185px", paddingLeft: "185px" }}>
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "32px",
            textDecoration: "none",
          }}
        >
          <img
            style={{
              height: "24px",
              width: "24px",
            }}
            alt="ArrowLeft"
            src={"../assets/svgs/arrowLeft.svg"}
          />
          <h3
            style={{
              fontSize: "20px",
              color: "#232427",
              marginLeft: "8px",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            Back to jobs
          </h3>
        </a>
        <div
          style={{
            display: "flex",
            borderRadius: 5,
            boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.08)",
            paddingTop: "20px",
            paddingLeft: "20px",
            paddingBottom: "27px",
            paddingRight: "46px",
            marginTop: "20px",
          }}
        >
          <div style={{ flexGrow: 1 }}>
            <div style={{ display: "flex" }}>
              <img
                style={{
                  height: "130px",
                  width: "116px",
                }}
                alt="Company"
                src={"../assets/images/bkmn.png"}
              />
              <div style={{ marginLeft: "32px" }}>
                <h3
                  style={{
                    fontSize: "36px",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  Architectural Designer
                </h3>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    marginTop: "20px",
                    marginBottom: "0px",
                  }}
                >
                  Black Mountain Architecture
                </p>
                <p
                  style={{
                    fontWeight: "550",
                    fontSize: "16px",
                    marginTop: "20px",
                    marginBottom: "0px",
                  }}
                >
                  Posted 07/27/2022
                </p>
              </div>
            </div>
            <div style={{ display: "flex", marginTop: "12px" }}>
              <SkillTypeContainer
                label={"Architecture"}
                textColor={"#FFFFFF"}
                backgroundColor={"#000000"}
              />
              <SkillTypeContainer
                label={"Freelance"}
                backgroundColor={"#E7FFCD"}
                border={false}
              />
              <SkillTypeContainer
                label={"Long-Term"}
                backgroundColor={"#CCE6FF"}
                border={false}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "self-end",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img
                style={{ height: "28px", width: "28px", marginRight: "20px" }}
                alt="Share"
                src={"../assets/svgs/share.svg"}
              />
              <img
                style={{ height: "24px", width: "24px", marginRight: "20px" }}
                alt="Share"
                src={"../assets/svgs/unBookmarked.svg"}
              />
            </div>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "550",
                backgroundColor: "#BBFEB5",
                marginTop: "26px",
                marginBottom: "0px",
                paddingTop: "5px",
                paddingRight: "12px",
                paddingBottom: "6px",
                paddingLeft: "14px",
                borderRadius: "3px",
              }}
            >
              Status: Accepting Applications
            </p>
            <button
              onClick={() => {}}
              style={{
                marginTop: "20px",
                height: "44px",
                width: "242px",
                borderRadius: "50px",
                background:
                  "linear-gradient(86.54deg, #F26A5C 7.4%, #F29C6B 115.84%)",
                border: "0px",
              }}
            >
              <h3 style={{ fontSize: "20px", color: "#FFFFFF", margin: 0 }}>
                Apply on Archslate
              </h3>
            </button>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "245px",
              height: "201px",
              boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.08)",
              marginTop: "24px",
              paddingTop: "16px",
              paddingLeft: "24px",
              borderRadius: "5px",
              marginRight: "30px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "20px", width: "16px", marginRight: "21px" }}
                alt="Star"
                src={"../assets/svgs/filterIcon.svg"}
              />
              <p style={{ fontSize: "18px", fontWeight: "550", margin: "0px" }}>
                Software Skills
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "19px",
              }}
            >
              <SkillTypeContainer
                label={"Rhino"}
                backgroundColor={"#000000"}
                textColor={"#FFFFFF"}
              />
              <SkillTypeContainer
                label={"Sketchup"}
                backgroundColor={"#000000"}
                textColor={"#FFFFFF"}
              />
              <SkillTypeContainer
                label={"Vectorworks"}
                backgroundColor={"#000000"}
                textColor={"#FFFFFF"}
              />
            </div>
          </div>
          <div
            style={{
              width: "245px",
              height: "201px",
              boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.08)",
              marginTop: "24px",
              paddingTop: "16px",
              paddingLeft: "24px",
              borderRadius: "5px",
              marginRight: "30px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "20px", width: "16px", marginRight: "21px" }}
                alt="Star"
                src={"../assets/svgs/freelanceStar.svg"}
              />
              <p style={{ fontSize: "18px", fontWeight: "550", margin: "0px" }}>
                Experience
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "19px",
              }}
            >
              <p
                style={{ fontSize: "24px", fontWeight: "50", paddingLeft: 40 }}
              >
                Associate 3+ years
              </p>
            </div>
          </div>
          <div
            style={{
              width: "245px",
              height: "201px",
              boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.08)",
              marginTop: "24px",
              paddingTop: "16px",
              paddingLeft: "24px",
              borderRadius: "5px",
              marginRight: "30px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "20px", width: "16px", marginRight: "21px" }}
                alt="Star"
                src={"../assets/svgs/freelanceDollar.svg"}
              />
              <p style={{ fontSize: "18px", fontWeight: "550", margin: "0px" }}>
                Rate
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "19px",
              }}
            >
              <p style={{ fontSize: "24px", fontWeight: "50" }}>$55-$65/hour</p>
            </div>
          </div>
          <div
            style={{
              width: "245px",
              height: "201px",
              boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.08)",
              marginTop: "24px",
              paddingTop: "16px",
              paddingLeft: "24px",
              borderRadius: "5px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "20px", width: "16px", marginRight: "21px" }}
                alt="Star"
                src={"../assets/svgs/freelanceLocation.svg"}
              />
              <p style={{ fontSize: "18px", fontWeight: "550", margin: "0px" }}>
                Location
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "19px",
              }}
            >
              <p
                style={{ fontSize: "24px", fontWeight: "50", paddingLeft: 40 }}
              >
                Bozeman, MT USA
              </p>
              <div style={{ marginRight: 50 }}>
                <SkillTypeContainer
                  label={"On-Site"}
                  backgroundColor={"#FCCDED"}
                  border={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "24px", display: "flex" }}>
          <div
            style={{
              boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.08)",
              paddingTop: "33px",
              paddingLeft: "73px",
              paddingRight: "71px",
              width: "61%",
              borderRadius: "5px",
            }}
          >
            <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>
              About this role
            </h3>
            <p style={{ marginTop: "20px", marginBottom: "0px" }}>
              Short overview about job and the way that the candidate would fit
              into the company. Can also include extra instructions for the
              application process if any exist.
            </p>
            <h3 style={{ marginTop: "20px", marginBottom: "0px" }}>
              Responsibilities
            </h3>
            <p style={{ marginTop: "0px", marginBottom: "0px" }}>
              <ul>
                <li>specific day to day taks</li>
                <li>deliverables</li>
                <li>work environment requirements</li>
                <li>role within the current team</li>
                <li>etc.</li>
              </ul>
            </p>
            <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>Skills</h3>
            <p style={{ marginTop: "0px", marginBottom: "0px" }}>
              <ul>
                <li>software skills</li>
                <li>technical skills</li>
                <li>work environment requirements</li>
                <li>soft skills</li>
                <li>other</li>
              </ul>
            </p>
            <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>
              Qualifications
            </h3>
            <p style={{ marginTop: "20px", marginBottom: "0px" }}>
              Required
              <ul>
                <li>education</li>
                <li>licenses and certifications</li>
                <li>work environment requirements</li>
                <li>experience needed</li>
              </ul>
              Bonus
              <ul>
                <li>education</li>
                <li>licenses and certifications</li>
                <li>work environment requirements</li>
                <li>experience needed</li>
              </ul>
            </p>
            <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>Rate</h3>
            <p style={{ marginTop: "0px", marginBottom: "0px" }}>
              <ul>
                <li>if available</li>
              </ul>
            </p>
            <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>
              Time Estimate
            </h3>
            <p style={{ marginTop: "0px", marginBottom: "0px" }}>
              <ul>
                <li>if Applicable</li>
              </ul>
            </p>
            <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>
              Work Autoriation
            </h3>
            <p style={{ marginTop: "0px", marginBottom: "0px" }}>
              <ul>
                <li>tbd</li>
              </ul>
            </p>
            <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>
              About Company
            </h3>
            <p style={{ marginTop: "20px", marginBottom: "0px" }}>
              Description of company with any uniform info or disclaimers -
              equal hiring opportunity, etc.
            </p>
            <div
              style={{
                display: "flex",
                marginTop: "25px",
                marginBottom: "63px",
              }}
            >
              <button
                onClick={() => {}}
                style={{
                  height: "44px",
                  width: "242px",
                  borderRadius: "50px",
                  background:
                    "linear-gradient(86.54deg, #F26A5C 7.4%, #F29C6B 115.84%)",
                  border: "0px",
                }}
              >
                <h3 style={{ fontSize: "20px", color: "#FFFFFF", margin: 0 }}>
                  Apply on Archslate
                </h3>
              </button>
              <button
                onClick={() => {}}
                style={{
                  height: "44px",
                  width: "115px",
                  borderRadius: "50px",
                  background: "#0F1420",
                  border: "0px",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "24px",
                }}
              >
                <img
                  style={{
                    height: "19px",
                    width: "18px",
                    marginRight: "11px",
                    marginLeft: "19px",
                  }}
                  alt="Star"
                  src={"../assets/svgs/starWhite.svg"}
                />
                <h3
                  style={{
                    fontSize: "20px",
                    color: "#FFFFFF",
                    margin: 0,
                    marginRight: "24px",
                  }}
                >
                  Save
                </h3>
              </button>
              <button
                onClick={() => {}}
                style={{
                  height: "44px",
                  width: "210px",
                  borderRadius: "50px",
                  background: "#0F1420",
                  border: "0px",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "29px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    marginRight: "11px",
                    marginLeft: "19px",
                  }}
                  alt="Star"
                  src={"../assets/svgs/shareWhite.svg"}
                />
                <h3
                  style={{
                    fontSize: "20px",
                    color: "#FFFFFF",
                    margin: 0,
                    flexWrap: "nowrap",
                  }}
                >
                  Share & Refer
                </h3>
              </button>
            </div>
          </div>
          <div
            style={{
              boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.08)",
              paddingTop: "18px",
              paddingLeft: "37px",
              paddingRight: "36px",
              marginLeft: "30px",
              borderRadius: "5px",
              maxHeight: "200px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                fontWeight: "550",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              Job Poster
            </p>
            <div style={{ display: "flex", marginTop: "23px" }}>
              <img
                style={{ height: "50px", width: "50px", marginRight: "0px" }}
                alt="Profile"
                src={"../assets/images/profileImage.png"}
              />
              <div style={{ marginLeft: "9px" }}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "300",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  John Carlos
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    marginTop: "5px",
                    marginBottom: "0px",
                  }}
                >
                  Project Manager
                </p>
              </div>
            </div>
            <button
              onClick={() => {}}
              style={{
                height: "34px",
                width: "151px",
                borderRadius: "50px",
                background: "#0F1420",
                display: "flex",
                alignItems: "center",
                marginTop: "25px",
              }}
            >
              <img
                style={{
                  height: "15px",
                  width: "18px",
                  marginRight: "11px",
                  marginLeft: "19px",
                }}
                alt="Star"
                src={"../assets/svgs/mailWhite.svg"}
              />
              <h3
                style={{
                  fontSize: "18px",
                  color: "#FFFFFF",
                  margin: 0,
                  flexWrap: "nowrap",
                }}
              >
                Message
              </h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
