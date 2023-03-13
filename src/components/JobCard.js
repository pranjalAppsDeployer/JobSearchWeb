import React from "react";
import { useNavigate } from "react-router-dom";
import { SkillTypeContainer } from "./SkillTypeContainer";

export const JobCard = ({ jobCardData, search }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        borderRadius: "5px",
        boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.08)",
        marginLeft: "170px",
        marginRight: "170px",
        paddingTop: !jobCardData.status ? "34px" : "0px",
        paddingBottom: "34px",
        paddingLeft: "24px",
        marginBottom: "20px",
        flexDirection: "column",
        alignSelf: "stretch",
      }}
    >
      {jobCardData.status && (
        <div
          style={{
            display: "flex",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "800",
              color: "#384D98",
              marginBottom: "24px",
              marginTop: "18px",
              marginRight: "10px",
            }}
          >
            Status: {jobCardData.status}
          </p>
          <img
            alt="Icon"
            src={
              jobCardData.status === "Decision"
                ? "../assets/images/popper.png"
                : "../assets/images/calendar.png"
            }
            style={{
              height: 28,
              width: 28,
              marginTop: "13px",
            }}
          />
        </div>
      )}
      <div style={{ display: "flex", flex: 1 }}>
        <div>
          <img
            alt="Job"
            src={jobCardData.imageUrl}
            style={{
              height: 185,
              width: 144,
              border: "1px solid #000000",
              borderRadius: "3px",
            }}
          />
        </div>
        <div style={{ marginLeft: "36px", flexGrow: 1 }}>
          <div style={{ display: "flex" }}>
            {jobCardData.skill && (
              <SkillTypeContainer label={jobCardData.skill} />
            )}
            {jobCardData.jobType && (
              <SkillTypeContainer
                label={jobCardData.jobType}
                backgroundColor={"#E7FFCD"}
                border={false}
              />
            )}
            {jobCardData.location && (
              <SkillTypeContainer
                label={jobCardData.location}
                backgroundColor={
                  jobCardData.location === "Remote" ? "#EBCDFF" : "#FCCDED"
                }
                border={false}
              />
            )}
            {jobCardData.term && (
              <SkillTypeContainer
                label={jobCardData.term}
                backgroundColor={
                  jobCardData.term === "Short Term" ? "#FFE6CD" : "#CCE6FF"
                }
                border={false}
              />
            )}
          </div>
          <h3
            style={{
              fontSize: "22px",
              color: "#0F1420",
              marginTop: "9px",
              marginBottom: "0px",
            }}
          >
            {jobCardData.jobTitle}
          </h3>
          <div style={{ display: "flex", marginTop: "8px" }}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "550",
                color: "#0F1420",
                marginRight: "12px",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              {jobCardData.companyName}
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#0F1420",
                display: "flex",
                alignItems: "center",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              <div style={{ marginRight: "14.5px" }}>|</div>
              <img
                style={{
                  height: "12.5px",
                  width: "10px",
                  marginRight: "6.5px",
                }}
                alt="Job"
                src={"../assets/svgs/location.svg"}
              />
              {jobCardData.jobLocation}{" "}
              <div style={{ marginRight: "12px", marginLeft: "12px" }}>|</div>
              {jobCardData.income}
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              fontWeight: "550",
              color: "#0F1420",
              marginBottom: "0px",
              marginTop: "21px",
            }}
          >
            Skill Requirements
          </p>
          <div style={{ display: "flex" }}>
            {jobCardData.skillRequirement.map((item) => {
              return (
                <SkillTypeContainer
                  label={item}
                  textColor={"#FFFFFF"}
                  backgroundColor={"#0F1420"}
                />
              );
            })}
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              style={{ height: "25px", width: "25px", marginRight: "20px" }}
              alt="Share"
              src={"../assets/svgs/share.svg"}
            />
            <img
              style={{ height: "20px", width: "20px", marginRight: "37px" }}
              alt="Bookmark"
              src={
                jobCardData.saved
                  ? "../assets/svgs/bookmarked.svg"
                  : "../assets/svgs/unBookmarked.svg"
              }
            />
          </div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#333A45",
              marginTop: "46px",
              marginBottom: "0px",
              marginRight: "32px",
            }}
          >
            Posted: {jobCardData.jobPostedDate}
          </p>
          <button
            onClick={search ? () => {} : () => navigate("/freelance")}
            style={{
              marginTop: "38px",
              height: "40px",
              width: "121px",
              borderRadius: "50px",
              background:
                "linear-gradient(86.54deg, #F26A5C 7.4%, #F29C6B 115.84%)",
              boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
              border: "0px",
              marginRight: "32px",
            }}
          >
            <h3 style={{ fontSize: "20px", color: "#FFFFFF", margin: 0 }}>
              {search ? "Apply" : "View Job"}
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
};
