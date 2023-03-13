import React, { useState } from "react";
import { jobsData } from "../data/jobsData";
import { JobsView } from "./JobsView";
import { Navbar } from "./Navbar";

export const Home = () => {
  const [status, setStatus] = useState(0);

  return (
    <div>
      <Navbar />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "28px" }}
        >
          <button
            style={{ border: "none", background: "none" }}
            onClick={() => {
              setStatus(0);
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                color: "#232427",
                fontWeight: status === 0 ? "700" : "500",
                borderBottom: status === 0 ? "2px solid #232427" : "",
                paddingBottom: "10px",
                paddingLeft: "10px",
                paddingRight: "10px",
                marginRight: "130px",
              }}
            >
              Search Jobs
            </h3>
          </button>
          <button
            style={{ border: "none", background: "none" }}
            onClick={() => {
              setStatus(1);
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                color: "#232427",
                fontWeight: status === 1 ? "700" : "500",
                borderBottom: status === 1 ? "2px solid #232427" : "",
                paddingBottom: "10px",
                paddingLeft: "10px",
                paddingRight: "10px",
                marginRight: "130px",
              }}
            >
              Applied
            </h3>
          </button>
          <button
            style={{ border: "none", background: "none" }}
            onClick={() => {
              setStatus(2);
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                color: "#232427",
                fontWeight: status === 2 ? "700" : "500",
                borderBottom: status === 2 ? "2px solid #232427" : "",
                paddingBottom: "10px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Saved Jobs
            </h3>
          </button>
        </div>
      </div>

      <JobsView
        searchJobsData={
          status === 0
            ? jobsData.searchJobs
            : status === 1
            ? jobsData.appliedJobs
            : jobsData.savedJobs
        }
        search={status === 0}
      />
    </div>
  );
};
